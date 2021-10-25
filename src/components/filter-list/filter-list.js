import React from 'react';

import FilterItem from '../filter-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './filter-list.scss'


export default function FilterList (props) {

    const { 
        title = '',
        list = [],
        tag = '',
        selected,
        loading, 
        error,
        onChange 
    } = props;
    const CustomTag = tag? tag : 'div';  

    return (
        <CustomTag className="filter-item">
            <h4 className="filter-item__title">{title? title : 'No title'}</h4>
            <ul className="options-list">
                {
                    loading?
                    <Spinner />
                    : error?
                    <ErrorIndicator />
                    : list.length > 0?
                    list.map(item => {
                        return (
                        <FilterItem 
                            {...item} 
                            onChange={onChange}
                            key={item.value}
                            checked={selected.includes(item.value)}/>)
                    })
                    : <li>No filters to show</li>
                }
            </ul>
        </CustomTag>
    )
}