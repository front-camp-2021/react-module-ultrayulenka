import React from 'react';

import FilterItem from '../filter-item';

import './filter-list.scss'


export default function FilterList (props) {
    
    const { title = '', list = [], tag = '' } = props;

    const CustomTag = tag? tag : 'div';  

    const items = list.map(item => {
        return <FilterItem {...item} key={item.value}/>
    })

    return (
        <CustomTag className="filter-item">
            <h4 className="filter-item__title">{title}</h4>
            <ul className="options-list">
                {items}
            </ul>
        </CustomTag>
    )
}