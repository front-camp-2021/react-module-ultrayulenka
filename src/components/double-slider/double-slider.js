import React from 'react';

import './double-slider.scss'

export default function DoubleSlider (props) {
    const {
        data = {},
        filterName = '',
        tag = '',
        className = ''
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

    const CustomTag = tag? tag : 'div';

    return (
        <CustomTag className={className}>
            <h4 class="filter-item__title">{filterName}</h4>
            <div className="range-slider">
                <span>{formatValue(selected.from)}</span>
                <div className="range-slider__inner">
                <span className="range-slider__progress"></span>
                <span className="range-slider__thumb-left"></span>
                <span className="range-slider__thumb-right"></span>
                </div>
                <span>{formatValue(selected.to)}</span>
            </div>
        </CustomTag>
    )
}