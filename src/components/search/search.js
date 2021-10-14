import React, { useState } from 'react';

import icon from './icon.svg';

import './search.scss'

export default function Search () {

    const [searchQuery, setSearchQuery] = useState('');

    const onChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <div className="search">
            <form className="searchbar">
                <input className="searchbar__input" 
                       type="text" 
                       placeholder="Search"
                       value={searchQuery}
                       onChange={onChange}/>
                <button className="search-button "type="submit">
                    <img className="searchbar__icon" src={icon} alt="Search"/>
                </button>
            </form>
        </div>
    )
}