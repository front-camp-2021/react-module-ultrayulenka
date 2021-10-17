import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectSearch } from '../../features/params/selectors';
import { changeSearchQuery } from '../../features/params/actions';

import icon from './icon.svg';

import './search.scss'

export default function Search () {

    const searchQuery = useSelector(selectSearch);
    const dispatch = useDispatch();

    return (
        <div className="search">
            <form className="searchbar">
                <input className="searchbar__input" 
                       type="text" 
                       placeholder="Search"
                       value={searchQuery}
                       onChange={(event) =>  dispatch(changeSearchQuery(event.target.value))}/>
                <button className="search-button "type="submit">
                    <img className="searchbar__icon" src={icon} alt="Search"/>
                </button>
            </form>
        </div>
    )
}