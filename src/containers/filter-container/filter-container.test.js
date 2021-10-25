import React from "react";

import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import FilterContainer from './filter-container';

import configureStore from 'redux-mock-store'

const { getByRole, getAllByRole, getByText, getByTestId } = screen;

describe('Filter list', () => {

    it('should be rendered correctly', () => {
        const initialState = {
            params: {
                filters: {
                    'Test Filter 1': {
                        title: 'Test Filter 1',
                        list: [
                            {
                                title: 'Number 1',
                                value: 1
                            },
                            {
                                title: 'Number 2',
                                value: 2
                            }
                        ],
                        loading: false,
                        error: false
                    },
            
                    'Test Filter 2': {
                        title: 'Test Filter 2',
                        list: [
                            {
                                title: 'Number 3',
                                value: 3
                            }
                        ],
                        loading: false,
                        error: false
                    }
                },
                
                selectedFilters: [],
            
                ranges: {
                    'Test Range': {
                        title: 'Test Range',
                        min: 8,
                        max: 10,
                    }
                },
            
                search: '',
                page: 1,
                totalPages: 10,
                pageLimit: 10
            }
        }

        const middlewares = [thunk];
        const mockStore = configureStore(middlewares);

        render (
            <Provider store={mockStore(initialState)}>
                <FilterContainer />
            </Provider>
        );

        screen.debug();

        const list = getByTestId('list');
        const checkboxes = getAllByRole('checkbox');

        expect(list.childElementCount).toBe(3);
        checkboxes.forEach(checkbox => {
            expect(checkbox.checked).toBe(false);
        })

    });

})