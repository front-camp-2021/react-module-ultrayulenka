import React, { useState, useEffect } from 'react';

import icon from './icon.svg';

import './search.scss'

export default function Search (props) {

    const { searchQuery = '', onChange = () => {} } = props;

    const [value, setValue] = useState(searchQuery);

    useEffect(() => {
        setValue(searchQuery);
    }, [searchQuery])

    return (
        <div className="search">
            <form className="searchbar" onSubmit={event => event.preventDefault()}>
                <input className="searchbar__input" 
                       type="text" 
                       placeholder="Search"
                       value={value}
                       onChange={(event) => {
                            setValue(event.target.value);
                            onChange(event.target.value);
                       }}/>
                <button className="search-button" type="submit">
                    <img className="searchbar__icon" src={icon} alt="Search"/>
                </button>
            </form>
        </div>
    )
}