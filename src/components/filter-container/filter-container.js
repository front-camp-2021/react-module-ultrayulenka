import React, { useState } from 'react';

import FilterList from '../filter-list';
import DoubleSlider from '../double-slider';
import Button from '../button';

import './filter-container.scss'

export default function FilterContainer () {

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

    const [selectedFilterValues, setSelectedFilterValues] = useState([]);

    const [selectedPriceRange, setSelectedPriceRange] = useState({from: priceSlider.data.min, to:priceSlider.data.max});
    const [selectedRatingRange, setSelectedRatingRange] = useState({from: ratingSlider.data.min, to:ratingSlider.data.max});

    const changeChecked = (value) => {
        setSelectedFilterValues(prev => {
            const index = prev.findIndex(item => item === value);

            if(index < 0) {
                return [...prev, value];
            } 

            return [...prev.slice(0, index), ...prev.slice(index+1)];
        })
    }

    const changeFromValue = ({ filterName, from, precision }) => {
        switch(filterName) {
            case priceSlider.filterName: {
                const min = priceSlider.data.min;
        
                setSelectedPriceRange(prev => {
                    const value = checkFrom({min, from, to: prev.to});
                    return {
                        ...prev,
                        from: roundValue({ value, precision })
                    };
                })
                break;
            }
            case ratingSlider.filterName: {
                const min = ratingSlider.data.min;

                setSelectedRatingRange(prev => {
                    const value = checkFrom({min, from, to: prev.to});
                    return {
                        ...prev,
                        from: roundValue({ value, precision })
                    };
                })
                break;
            }
            default: return;
        }
    }

    const changeToValue = ({ filterName, to, precision }) => {
        switch(filterName) {
            case priceSlider.filterName: {
                const max = priceSlider.data.max;
        
                setSelectedPriceRange(prev => {
                    const value = checkTo({ max, from: prev.from, to });
                    return {
                        ...prev,
                        to: roundValue({ value, precision })
                    };
                })
                break;
            }
            case ratingSlider.filterName: {
                const max = ratingSlider.data.max;

                setSelectedRatingRange(prev => {
                    const value = checkTo({ max, from: prev.from, to });
                    return {
                        ...prev,
                        to: roundValue({ value, precision })
                    };
                })
                break;
            }
            default: return;
        }
    }

    const checkFrom = ({ min, from, to }) => {
        if(from < min) {
            return min;
        } 
        const res = from - min;
        if(to - res <= min) {
            return to;
        } else {
            return from;
        }
    }

    const checkTo = ({ max, from, to }) => {
        if(to > max) {
            return max;
        }
        const res = max - to;
        if(from + res >= max) {
            return from;
        } else {
            return to;
        };
    }

    const roundValue = ({ value, precision }) => {
        const newValue = value * Math.pow(10, precision);
        const res = Math.round(newValue) / Math.pow(10, precision)
        return res;
    }

    const onClearFiltersClick = () => {
        console.log("hello");
        setSelectedFilterValues([]);
        setSelectedPriceRange({from: priceSlider.data.min, to:priceSlider.data.max});
        setSelectedRatingRange({from: ratingSlider.data.min, to:ratingSlider.data.max});
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
                        data={{...priceSlider.data, selected: selectedPriceRange}}
                        changeFromValue={changeFromValue}
                        changeToValue={changeToValue}/>
                    <FilterList {...categoryFilter} 
                        tag='li'
                        changeChecked={value => changeChecked(value)}
                        selected={selectedFilterValues}/>
                    <FilterList {...brandFilter} 
                        tag='li'
                        changeChecked={value => changeChecked(value)}
                        selected={selectedFilterValues}/>
                    <DoubleSlider tag='li'
                        filterName={ratingSlider.filterName}
                        data={{...ratingSlider.data, selected: selectedRatingRange}}
                        changeFromValue={changeFromValue}
                        changeToValue={changeToValue}/>
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