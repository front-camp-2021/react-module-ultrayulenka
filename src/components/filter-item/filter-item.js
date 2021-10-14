import React, { useEffect, useState } from 'react';

import './filter-item.scss'

export default function FilterItem (props) {

    const { title = '', value = '', amount = 0, checked, changeChecked = () => {} } = props;

    return (
        <li className="options-list__item">
            <div>
            <input className="options-list__input" type="checkbox" 
                   id={value} 
                   name={title} 
                   checked={checked}
                   onChange={() => changeChecked(value)}/>
            <label className="options-list__label" htmlFor={value}>{title}</label>
            </div>
            <span className="options-list__amount">{amount}</span>
        </li>
    )
}