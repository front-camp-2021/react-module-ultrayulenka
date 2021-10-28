import React from "react";

import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import FilterItem from './filter-item';

const onFilterChangeMock = jest.fn();

const { getByRole, getByText, queryByRole } = screen;

const defaultProps = {
    title: 'Test Filter Item',
    value: 'something',
    checked: false,
    onChange: onFilterChangeMock
}

describe('Filter item', () => {

    it('should be rendered correctly', () => {
        render (
            <FilterItem {...defaultProps} />
        )

        const checkbox = getByRole('checkbox');

        expect(checkbox.checked).toEqual(false);
        expect(checkbox.value).toEqual('something');

    })

    it('should call onChange func when user clicks on checkbox or label', () => {
        render (
            <FilterItem {...defaultProps} />
        )

        const checkbox = getByRole('checkbox');
        const label = getByText('Test Filter Item');

        userEvent.click(label);
        expect(onFilterChangeMock).toBeCalledTimes(1);
        userEvent.click(checkbox);
        expect(onFilterChangeMock).toBeCalledTimes(2);

    }) 

    it('should have ability to be rendered with empty props', () => {
        render (
            <FilterItem />
        )
    
        const listItem = getByRole('listitem');
        const checkbox = queryByRole('checkbox');
    
        expect(listItem).toHaveTextContent('Invalid filter');
        expect(checkbox).not.toBeInTheDocument()
    })
})