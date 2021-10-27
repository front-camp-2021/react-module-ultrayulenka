import React from 'react';

import { useHistory } from "react-router-dom";
import { WISHLIST } from '../../routes'

import Button from '../button';

import heart from './heart.svg';

import './products-page-heading.scss';

export default function ProductsPageHeading (props) {

    const { isSidebarOpen = false, totalProducts = 0, onShowSidebarClick = () => {} } = props;

    const history = useHistory();

    return (
        <div className="heading">
            <div className={`heading__sidebar ${isSidebarOpen? 'heading__sidebar_open' : 'heading__sidebar_closed'}`}>
                <h3 className="section-title">
                    Filters
                </h3>
                <Button 
                    size="small"
                    className="heading__show-sidebar-btn"
                    onClick={onShowSidebarClick}>
                    <div className={`arrows arrows_${isSidebarOpen? 'left' : 'right'}`}></div>
                    <div className={`arrows arrows_${isSidebarOpen? 'up' : 'down'}`}></div>
                </Button>
            </div>
            <div className={`heading__products ${isSidebarOpen? 'heading__products_open' : 'heading__products_closed'}`}>
                <span className="total">{totalProducts} results found</span>
                <Button 
                    size="small"
                    color="primary"
                    onClick={() => history.push(WISHLIST)}>
                    <img className="button__icon" src={heart} alt="Go to wishlist"/>
                </Button>
            </div>
        </div>
    )
}