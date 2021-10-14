import React, { useState } from 'react';

import FilterItem from '../filter-item';

import './filter-list.scss'


export default function FilterList (props) {

    const { title = '', list = [], tag = '', changeChecked, selected } = props;

    //const [selectedValues, setSelectedValues] = useState([]);

    const CustomTag = tag? tag : 'div';  

    /*const changeChecked = (value) => {
        setSelectedValues(prev => {
            const index = prev.findIndex(item => item === value);

            if(index < 0) {
                return [...prev, value];
            } 

            return [...prev.slice(0, index), ...prev.slice(index+1)];
        })
    }*/

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
                            checked={selected.includes(item.value)}
                            changeChecked={changeChecked}/>)
                    })
                }
            </ul>
        </CustomTag>
    )
}