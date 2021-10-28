import React from 'react';

import './filter-item.scss'

export default function FilterItem (props) {

    const { title = '', value = '', checked = false, onChange = () => {} } = props;

    if(!value) return <li>Invalid filter</li>;

    return (
        <li className="options-list__item">
            <div>
                <input className="options-list__input" type="checkbox" 
                    id={value} 
                    name={title}
                    value={value} 
                    checked={checked}
                    disabled={!value}
                    onChange={onChange}/>
                <label className="options-list__label" htmlFor={value}>{title? title : 'No title'}</label>
            </div>
        </li>
    )
}