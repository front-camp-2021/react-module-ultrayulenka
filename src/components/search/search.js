import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { WISHLIST } from '../../routes'

import Button from '../button'

import icon from './icon.svg';
import heart from './heart.svg';

import './search.scss'

export default function Search (props) {

    const { searchQuery = '', onChange = () => {}, total = 0 } = props;

    const [value, setValue] = useState(searchQuery);

    const history = useHistory();

    useEffect(() => {
        setValue(searchQuery);
    }, [searchQuery])

    return (
        <div className="search">
            <div className="search__header">
                <span className="search__text">{total} results found</span>
                <Button 
                    size="small"
                    color="primary"
                    onClick={() => history.push(WISHLIST)}>
                    <img className="button__icon" src={heart} alt="Go to wishlist"/>
                </Button>
            </div>
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