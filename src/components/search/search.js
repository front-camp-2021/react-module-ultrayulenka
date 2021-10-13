import React from 'react';

import icon from './icon.svg';

import './search.scss'

export default function Search () {
    return (
        <div class="search">
            <form class="searchbar">
                <input class="searchbar__input" type="text" placeholder="Search"/>
                <button class="search-button "type="submit">
                    <img class="searchbar__icon" src={icon} alt="Search"/>
                </button>
            </form>
        </div>
    )
}