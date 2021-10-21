import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useHistory } from "react-router-dom";
import { WISHLIST } from '../../routes'

import { useSelector, useDispatch } from "react-redux";
import { selectSearch } from '../../features/params/selectors';
import { changeSearchQuery } from '../../features/params/actions';

import Button from '../button'

import icon from './icon.svg';
import heart from './heart.svg';

import './search.scss'

export default function Search () {

    const searchQuery = useSelector(selectSearch);
    const [value, setValue] = useState(searchQuery);

    const dispatch = useDispatch();
    const history = useHistory();

    const debouncedChangeSearchQuery = useDebouncedCallback((value) => {
        dispatch(changeSearchQuery(value));
    }, 500)

    useEffect(() => {
        setValue(searchQuery);
    }, [searchQuery])

    return (
        <div className="search">
            <div className="search__header">
                <span className="search__text">7,618 results found</span>
                <Button 
                    size="small"
                    color="primary"
                    onClick={() => history.push(WISHLIST)}>
                    <img className="button__icon" src={heart} alt="Go to wishlist"/>
                </Button>
            </div>
            <form className="searchbar">
                <input className="searchbar__input" 
                       type="text" 
                       placeholder="Search"
                       value={value}
                       onChange={(event) => {
                            setValue(event.target.value);
                            debouncedChangeSearchQuery(event.target.value);
                       }}/>
                <button className="search-button "type="submit">
                    <img className="searchbar__icon" src={icon} alt="Search"/>
                </button>
            </form>
        </div>
    )
}