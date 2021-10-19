import React from 'react';

import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../features/params/actions';

import './filter-item.scss'

export default function FilterItem (props) {

    const dispatch = useDispatch();

    const { title = '', value = '', amount = 0, checked } = props;

    return (
        <li className="options-list__item">
            <div>
            <input className="options-list__input" type="checkbox" 
                   id={value} 
                   name={title} 
                   checked={checked}
                   onChange={() => {
                       if(checked) {
                           dispatch(removeFilter(value));
                       } else {
                           dispatch(addFilter(value));
                       }
                   }}/>
            <label className="options-list__label" htmlFor={value}>{title}</label>
            </div>
            <span className="options-list__amount">{amount}</span>
        </li>
    )
}