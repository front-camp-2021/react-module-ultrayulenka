import React from 'react';

import FilterList from '../filter-list';
import DoubleSlider from '../double-slider';
import Button from '../button';

import './filter-container.scss'

export default function FilterContainer (props) {

    //const { categoryFilter, brandFilter } = props;

    const categoryFilter = {
        title: "Category",
        list: [
            {
                value: 'cell_phones',
                title: 'Cell phones',
            },
            {
                value: 'computers',
                checked: true,
                title: 'Computers & Tables',
            }
        ],
        tag: 'li'
    }

    const brandFilter = {
        title: "Brand",
        list: [],
        tag: 'li'
    }

    const priceSlider = {
        filterName: 'Price',
        tag: 'li',
        className: 'filter-item',
        data: {
            min: 0, 
            max: 85000,
            precision: 0, 
            formatValue: value => value + " UAH"
        }
    }

    const ratingSlider = {
        filterName: 'Rating',
        tag: 'li',
        className: 'filter-item',
        data: {
            min: 0, 
            max: 5,
            precision: 2
        }
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
                    <DoubleSlider {...priceSlider} />
                    <FilterList {...categoryFilter} />
                    <FilterList {...brandFilter} />
                    <DoubleSlider {...ratingSlider} />
                </ul>
            </div>
            <Button color="primary" size="large">
                  CLEAR ALL FILTERS
            </Button>
        </aside>
    )
}