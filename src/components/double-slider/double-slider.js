import React, { useState, useRef, useEffect } from 'react';

import { useDispatch } from "react-redux";
import { changeRangeToValue, changeRangeFromValue } from '../../features/params/actions'

import './double-slider.scss'

export default function DoubleSlider (props) {
    const {
        data = {},
        filterName = '',
        tag = ''
    } = props;

    const {
        min = 100,
        max = 200,
        formatValue = value => value,
        selected = {
          from: min,
          to: max
        },
        precision = 1
    } = data;

    const sliderRef = useRef();
    const thumbLeftRef = useRef();
    const thumbRightRef = useRef();

    let sliderProps = useRef({});
    let thumbProps = useRef({});

    const dispatch = useDispatch();

    const [activeThumb, setActiveThumb] = useState('');

    const CustomTag = tag? tag : 'div';

    useEffect(() => {
        const slider = sliderRef.current;

        const fullWidth = slider.getBoundingClientRect().width;
        const leftBoundry = slider.getBoundingClientRect().left;
        const rightBoundry = slider.getBoundingClientRect().right;
        const bottomBoundry = slider.getBoundingClientRect().y;
        
        sliderProps.current = {
            fullWidth,
            leftBoundry,
            rightBoundry, 
            bottomBoundry
        };

        const thumbLeft = thumbLeftRef.current;

        const width = thumbLeft.getBoundingClientRect().width;
        const height = thumbLeft.getBoundingClientRect().height;

        thumbProps.current = {
            width,
            height
        }
        
    }, [])

    const range = max > min? max - min : 0;
    let left = 0;
    let right = 0;

    const calcLeft = ({ min, from, range }) => {
        const left = from - min <= 0? 0 : (from - min) / range * 100;
        if(left + right > 100) return 100 - right;
        return left;
    }

    const calcRight = ({ max, to, range}) => {
        const right = max - to <= 0? 0 : (max - to) / range * 100;
        if(right + left > 100) return 100 - left;
        return right;
    }

    const checkFrom = ({ min, from, to }) => {
        if(from < min) {
            return min;
        } 
        const res = from - min;
        if(to - res <= min) {
            return to;
        } else {
            return from;
        }
    }

    const checkTo = ({ max, from, to }) => {
        if(to > max) {
            return max;
        }
        const res = max - to;
        if(from + res >= max) {
            return from;
        } else {
            return to;
        };
    }

    left = calcLeft({min, from: selected.from, range});
    right = calcRight({max, to: selected.to, range});

    const onMoveLeft = (event) => {
        const { leftBoundry, fullWidth } = sliderProps.current;
        const { width } = thumbProps.current;
        const shiftX = event.clientX - leftBoundry + width;
        const newFrom = checkFrom({
            min,
            from: min + (shiftX / fullWidth * range),
            range
        });
        dispatch(changeRangeFromValue({ name: filterName, from: newFrom, precision }));
    }

    const onMoveRight = (event) => {
        const { rightBoundry, fullWidth } = sliderProps.current;
        const shiftX = rightBoundry - event.clientX;
        const newTo = checkTo({
            max,
            to: max - (shiftX / fullWidth * range),
            range
        });
        dispatch(changeRangeToValue({ name: filterName, to: newTo, precision }));
    }

    const onPointerUpLeft = () => {
        setActiveThumb('');
        const thumbLeft = thumbLeftRef.current;
        thumbLeft.classList.remove("range-slider_dragging");
    }

    const onPointerUpRight = () => {
        setActiveThumb('');
        const thumbRight = thumbRightRef.current;
        thumbRight.classList.remove("range-slider_dragging");
    }

    const onPointerDownLeft = (event) => {
        event.preventDefault();
        setActiveThumb('left');
        const thumbLeft = thumbLeftRef.current;
        thumbLeft.classList.add("range-slider_dragging");
    }
    const onPointerDownRight = (event) => {
        event.preventDefault();
        setActiveThumb('right');
        const thumbRight = thumbRightRef.current;
        thumbRight.classList.add("range-slider_dragging");
    }

    return (
        <CustomTag className="filter-item"
        onPointerMove={ activeThumb === 'left'?
                        onMoveLeft :
                        activeThumb === 'right'?
                        onMoveRight : () => {}}
        onPointerUp={activeThumb === 'left'?
                    onPointerUpLeft :
                    activeThumb === 'right'?
                    onPointerUpRight : () => {}}>
            <h4 className="filter-item__title">{filterName}</h4>
            <div className="range-slider">
                <span>{formatValue(selected.from)}</span>
                <div ref={sliderRef} className="range-slider__inner">
                    <span className="range-slider__progress" 
                          style={{left: `${left}%`, right: `${right}%`}}/>
                    <span ref={thumbLeftRef} 
                          className="range-slider__thumb-left" 
                          style={{left: `${left}%`}}
                          onPointerDown={onPointerDownLeft}/>
                    <span ref={thumbRightRef} 
                          className="range-slider__thumb-right" 
                          style={{right: `${right}%`}}
                          onPointerDown={onPointerDownRight}/>
                </div>
                <span>{formatValue(selected.to)}</span>
            </div>
        </CustomTag>
    )
}