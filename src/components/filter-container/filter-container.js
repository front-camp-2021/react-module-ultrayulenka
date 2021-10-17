import React, { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectFilters, selectRanges } from '../../features/params/selectors';
import { clearAllFilters } from '../../features/params/actions';

import FilterList from '../filter-list';
import DoubleSlider from '../double-slider';
import Button from '../button';

import './filter-container.scss'

export default function FilterContainer () {

    const selectedFilters = useSelector(selectFilters);
    const selectedRanges = useSelector(selectRanges);
    const dispatch = useDispatch();

    const categoryFilter = {
        title: "Category",
        list: [
            {
                value: 'category=cell_phones',
                title: 'Cell Phones',
            },
            {
                value: 'category=computer_tablets',
                title: 'Computers & Tablets',
            },
            {
                value: 'category=cell_phones_accessories',
                title: 'Cell Phone Accessories',
            },
            {
                value: 'category=appliances',
                title: 'Appliances',
            },
            {
                value: 'category=audio',
                title: 'Audio',
            }
        ]
    }

    const brandFilter = {
        title: "Brand",
        list: [
            {
                value: 'brand=insigni',
                title: 'Insigni',
              },
              {
                value: 'brand=samsung',
                title: 'Samsung',
              },
              {
                value: 'brand=apple',
                title: 'Apple',
              }
        ]
    }

    const priceSlider = {
        filterName: 'Price',
        data: {
            min: 0, 
            max: 85000,
            precision: 0, 
            formatValue: value => value + " UAH"
        }
    }

    const ratingSlider = {
        filterName: 'Rating',
        data: {
            min: 0, 
            max: 5,
            precision: 2
        }
    }
                    

    const onClearFiltersClick = () => {
        dispatch(clearAllFilters());
    }


    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <h3 className="section-title">
                    Filters
                </h3>
                <Button size="small">
                    <div className="arrows arrows_left"></div>
                    <div className="arrows arrows_down"></div>
                </Button>
            </div>
            <div className="sidebar__container">
                <ul className="filter-list">
                    <DoubleSlider tag='li'
                        filterName={priceSlider.filterName}
                        data={{
                            ...priceSlider.data, 
                            selected: selectedRanges[priceSlider.filterName]
                        }}/>
                    <FilterList {...categoryFilter} 
                        tag='li'
                        selected={selectedFilters}
                        />
                    <FilterList {...brandFilter} 
                        tag='li'
                        selected={selectedFilters}
                        />
                    <DoubleSlider tag='li'
                        filterName={ratingSlider.filterName}
                        data={{
                            ...ratingSlider.data, 
                            selected: selectedRanges[ratingSlider.filterName]
                        }}/>
                </ul>
            </div>
            <Button color="primary" 
                size="large"
                onClick={onClearFiltersClick}>
                  CLEAR ALL FILTERS
            </Button>
        </aside>
    )
}