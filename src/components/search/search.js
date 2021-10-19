import React from 'react';

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
    const dispatch = useDispatch();
    const history = useHistory();

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
                       value={searchQuery}
                       onChange={(event) =>  dispatch(changeSearchQuery(event.target.value))}/>
                <button className="search-button "type="submit">
                    <img className="searchbar__icon" src={icon} alt="Search"/>
                </button>
            </form>
        </div>
    )
}