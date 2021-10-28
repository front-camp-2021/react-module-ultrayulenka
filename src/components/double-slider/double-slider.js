import React, { useState, useRef, useEffect } from 'react';

import { roundValue, checkTo, checkFrom } from '../../utils'

import './double-slider.scss'


export default function DoubleSlider (props) {
    const {
        title = '',
        min = 0,
        max = 0,
        formatValue = value => value,
        selected = {
          from: min,
          to: max
        },
        precision = 0,
        tag = '',
        onChange = () => {}
    } = props;

    const sliderRef = useRef();
    const thumbLeftRef = useRef();
    const thumbRightRef = useRef();

    const [activeThumb, setActiveThumb] = useState('');

    const [from, setFrom] = useState(checkFrom({min, to: selected.to, from: selected.from}));
    const [to, setTo] = useState(checkTo({max, from, to: selected.to}));

    useEffect(() => {
        setFrom(checkFrom({min, to, from: selected.from}));
        setTo(checkTo({max, from, to: selected.to}));
    }, [selected])

    const CustomTag = tag? tag : 'div';

    const getSliderProps = () => {
        const slider = sliderRef.current;

        const fullWidth = slider.getBoundingClientRect().width;
        const leftBoundry = slider.getBoundingClientRect().left;
        const rightBoundry = slider.getBoundingClientRect().right;
        const bottomBoundry = slider.getBoundingClientRect().y;

        return {
            fullWidth,
            leftBoundry,
            rightBoundry, 
            bottomBoundry
        }
    }

    const getThumbProps = () => {
        const thumbLeft = thumbLeftRef.current;

        const width = thumbLeft.getBoundingClientRect().width;
        const height = thumbLeft.getBoundingClientRect().height;

        return {
            width,
            height
        }
    }


    const range = max > min? max - min : 0;
    const left = (from - min) / range * 100;
    const right = (max - to) / range * 100;

    const onMoveLeft = (event) => {
        const { leftBoundry, fullWidth } = getSliderProps();
        const { width } = getThumbProps();
        const shiftX = event.clientX - leftBoundry + width;
        const newFrom = checkFrom({ min, to, from: min + (shiftX / fullWidth * range)});
        const roundedFromValue = roundValue({value: newFrom, precision})
        setFrom(roundedFromValue);
        onChange({value: roundedFromValue, hint: 'from', title, precision});
    }

    const onMoveRight = (event) => {
        const { rightBoundry, fullWidth } = getSliderProps();
        const shiftX = rightBoundry - event.clientX;
        const newTo = checkTo({ max, from, to: max - (shiftX / fullWidth * range)});
        const roundedToValue = roundValue({value: newTo, precision})
        setTo(roundedToValue);
        onChange({value: roundedToValue, hint: 'to', title, precision});
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
        <CustomTag className="filter-item" data-testid='slider'
        onPointerMove={ activeThumb === 'left'?
                        onMoveLeft :
                        activeThumb === 'right'?
                        onMoveRight : () => {}}
        onPointerUp={activeThumb === 'left'?
                    onPointerUpLeft :
                    activeThumb === 'right'?
                    onPointerUpRight : () => {}}>
            <h4 className="filter-item__title">{title? title: 'No title'}</h4>
            <div className="range-slider">
                <span data-testid='from-value'>{formatValue(from)}</span>
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
                <span data-testid='to-value'>{formatValue(to)}</span>
            </div>
        </CustomTag>
    )
}