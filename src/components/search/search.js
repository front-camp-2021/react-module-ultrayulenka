import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
            <div class="search__header">
                <span class="search__text">7,618 results found</span>
                <Button 
                    size="small"
                    color="primary"
                    onClick={() => history.push('/wishlist')}>
                    <img class="button__icon" src={heart} alt="Go to wishlist"/>
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