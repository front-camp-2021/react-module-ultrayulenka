import React from 'react';

import FilterItem from '../filter-item';

import './filter-list.scss'


export default function FilterList (props) {

    const { title = '', list = [], tag = '', selected } = props;


    const CustomTag = tag? tag : 'div';  

    return (
        <CustomTag className="filter-item">
            <h4 className="filter-item__title">{title}</h4>
            <ul className="options-list">
                {
                    list.map(item => {
                        return (
                        <FilterItem 
                            {...item} 
                            key={item.value}
                            checked={selected.includes(item.value)}/>)
                    })
                }
            </ul>
        </CustomTag>
    )
}