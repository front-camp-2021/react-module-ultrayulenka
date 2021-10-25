import React from "react";

import {
  render,
  screen
} from "@testing-library/react";

import FilterList from './filter-list';

const onFilterChangeMock = jest.fn();

const { getByRole, getAllByRole, getByText } = screen;

const defaultProps = {
    title: 'Test Filter List',
    list: [{value: 1}, {value: 2}],
    tag: 'li',
    selected: [1, 3],
    loading: false, 
    error: false,
    onChange: onFilterChangeMock
}

describe('Filter list', () => {

    it('should be rendered correctly', () => {
        render (
            <FilterList {...defaultProps} />
        )
    
        const heading = getByRole('heading');
        const list = getByRole('list');
        const checkboxes = getAllByRole('checkbox', {checked:true});

        expect(heading).toHaveTextContent('Test Filter List');
        expect(list).toBeInTheDocument();
        expect(list).toBeVisible();
        expect(list.childElementCount).toEqual(2);
        expect(checkboxes.length).toEqual(1);
    });

    it('should have ability to be rendered with empty props', () => {
        render (
            <FilterList />
        )

        const heading = getByRole('heading');

        expect(heading).toHaveTextContent('No title');
        expect(getByText('No filters to show')).toBeInTheDocument();
    })

    it('should not render list items while loading', () => {
        render (
            <FilterList {...defaultProps} loading={true} />
        )

        const list = getByRole('list');

        expect(list.querySelectorAll('li').length).toEqual(0);
    })

    it('should render error message instead of list items in case of error', () => {
        render (
            <FilterList {...defaultProps} error={true} />
        )

        const list = getByRole('list');

        expect(list.querySelectorAll('li').length).toEqual(0);
        expect(list).toHaveTextContent('Error');

    })
})
