import React, { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce'

import { useSelector, useDispatch } from "react-redux";
import { selectFilters, selectRanges, selectActiveFilters } from '../../features/params/selectors';
import { getAllFilters } from '../../features/params/actions'
import { 
    clearAllFilters,
    addFilter,
    removeFilter,
    changeRangeFromValue,
    changeRangeToValue 
} from '../../features/params/actions';

import FilterList from '../../components/filter-list';
import DoubleSlider from '../../components/double-slider';
import Button from '../../components/button';

import './filter-container.scss'

export default function FilterContainer () {

    const filters = useSelector(selectFilters);
    const selectedFilters = useSelector(selectActiveFilters);
    const ranges = useSelector(selectRanges);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFilters());
    }, [])

    const onFilterChange = (event) => {
        const { checked, value } = event.target;
        if(checked) {
            dispatch(addFilter(value));
        } else {
            dispatch(removeFilter(value));
        }
    }

    const changeRangeValue = useDebouncedCallback(({ title = '', value, hint = '', precision = 0 }) => {
        if(typeof value !== 'number') return;
        switch(hint) {
            case 'to': {
                dispatch(changeRangeToValue({ name: title, to: value, precision }));
                break;
            }
            case 'from': {
                dispatch(changeRangeFromValue({ name: title, from: value, precision }));
                break;
            }
            default: return;
        }
    }, 500)

    const sliders = []; 
    for(let value of Object.values(ranges)) {   
        sliders.push(
            <DoubleSlider 
                {...value}
                key={value.title}
                tag='li'
                onChange={changeRangeValue}/>
        )
    }

    const filterLists = [];
    for(let value of Object.values(filters)) {
        filterLists.push(
            <FilterList 
                {...value}
                tag='li'
                key={value.title}
                selected={selectedFilters}
                onChange={onFilterChange} />
        )
    }
                    
    return (
        <aside className="sidebar">
            <div className="sidebar__container">
                <ul className="filter-list" data-testid="list">
                    {
                        sliders.length?
                        sliders:
                        null
                    }
                    {
                        filterLists.length?
                        filterLists:
                        null
                    }
                </ul>
            </div>
            <Button color="primary" 
                size="large"
                className="sidebar__button_large"
                onClick={() => dispatch(clearAllFilters())}>
                  CLEAR ALL FILTERS
            </Button>
        </aside>
    )
}