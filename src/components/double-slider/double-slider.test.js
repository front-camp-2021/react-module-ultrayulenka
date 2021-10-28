import React from "react";

import {
    render,
    screen
} from "@testing-library/react";

import DoubleSlider from './double-slider';

const onSliderChangeMock = jest.fn();

const { getByRole, getByTestId } = screen;

const defaultProps = {
    title: 'Test Slider',
    min: 0,
    max: 100,
    formatValue: value => value + '%',
    precision: 0,
    tag: '',
    onChange: onSliderChangeMock
}

describe('Filter item', () => {

    it('should be rendered correctly', () => {
        render (
            <DoubleSlider {...defaultProps} />
        )
        
        const from = getByTestId('from-value');
        const to = getByTestId('to-value');
        const heading = getByRole('heading');

        expect(heading).toHaveTextContent('Test Slider');
        expect(from.textContent).toEqual('0%');
        expect(to.textContent).toEqual('100%');
    })

    it('should set left value to equal min and right value to equal max if invalid values received', () => {
        const props = {...defaultProps, selected: { from: 'a', to: 110}}
        render (
            <DoubleSlider {...props} />
        )

        const from = getByTestId('from-value');
        const to = getByTestId('to-value');

        expect(from.textContent).toEqual('0%');
        expect(to.textContent).toEqual('100%');
    }) 

    it('should have ability to set selected range', () => {
        const props = {...defaultProps, selected: { from: 20, to: 50 }}
        render (
            <DoubleSlider {...props} />
        )

        const from = getByTestId('from-value');
        const to = getByTestId('to-value');

        expect(from.textContent).toEqual('20%');
        expect(to.textContent).toEqual('50%');
    })

    it('should set right and left to equal if to is less than from', () => {
        const props = {...defaultProps, selected: { from: 20, to: 10}}
        render (
            <DoubleSlider {...props} />
        )

        const from = getByTestId('from-value');
        const to = getByTestId('to-value');

        expect(from.textContent).toEqual('10%');
        expect(to.textContent).toEqual('10%');
    })

    it('should have ability to be rendered with empty props', () => {
        render (
            <DoubleSlider />
        )

        const from = getByTestId('from-value');
        const to = getByTestId('to-value');

        expect(from.textContent).toEqual('0');
        expect(to.textContent).toEqual('0');
    })
})