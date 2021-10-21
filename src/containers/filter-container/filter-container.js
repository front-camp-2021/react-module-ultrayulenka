import React, { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectFilters, selectRanges } from '../../features/params/selectors';
import { selectCategoryFilter, selectBrandFilter } from '../../features/filters-data/selectors'
import { getAllFilters } from '../../features/filters-data/actions'
import { clearAllFilters } from '../../features/params/actions';

import FilterList from '../../components/filter-list';
import DoubleSlider from '../../components/double-slider';
import Button from '../../components/button';

import './filter-container.scss'

export default function FilterContainer () {

    const selectedFilters = useSelector(selectFilters);
    const ranges = useSelector(selectRanges);
    const categoryFilter = useSelector(selectCategoryFilter);
    const brandFilter = useSelector(selectBrandFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFilters());
    }, [])

    const priceSlider = {
        filterName: 'Price',
        formatValue: value => value + " UAH"
    }

    const ratingSlider = {
        filterName: 'Rating'
    }
                    
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <h3 className="section-title">
                    Filters
                </h3>
                <Button size="small"
                    className="sidebar__button_small">
                    <div className="arrows arrows_left"></div>
                    <div className="arrows arrows_down"></div>
                </Button>
            </div>
            <div className="sidebar__container">
                <ul className="filter-list">
                    <DoubleSlider tag='li'
                        filterName={priceSlider.filterName}
                        data={{
                            ...priceSlider, 
                            ...ranges[priceSlider.filterName]
                        }}/>
                    <FilterList {...categoryFilter} 
                            tag='li'
                            selected={selectedFilters}/>
                    <FilterList {...brandFilter} 
                            tag='li'
                            selected={selectedFilters}/>
                    <DoubleSlider tag='li'
                        filterName={ratingSlider.filterName}
                        data={{
                            ...ratingSlider, 
                            ...ranges[ratingSlider.filterName]
                        }}/>
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