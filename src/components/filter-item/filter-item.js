import React from 'react';

import './filter-item.scss'

export default function FilterItem (props) {

    const { title = '', value = '', checked = false, amount = 0 } = props;

    return (
        <li className="options-list__item">
            <div>
            <input className="options-list__input" type="checkbox" id={value} 
                name={title} defaultChecked={checked}/>
            <label className="options-list__label" htmlFor={value}>{title}</label>
            </div>
            <span className="options-list__amount">{amount}</span>
        </li>
    )
}