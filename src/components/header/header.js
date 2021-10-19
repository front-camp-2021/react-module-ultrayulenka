import React from 'react';

import { NavLink, useHistory } from "react-router-dom";
import { CART, HOME } from '../../routes'

import Navigation from '../navigation';
import Button from '../button';

import './header.scss';
import logo from './logo.svg';
import shoppingBag from './shopping-bag.svg';


export default function Header () {

    const history = useHistory();

    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo-container__item">
                    <div className="logo">
                        <NavLink to={HOME} className="link"> 
                            <img className="logo__icon" src={logo} alt=""/>
                        </NavLink>
                    </div>
                    <h1 className="title">
                        <NavLink to={HOME} className="link">
                            Online Store
                        </NavLink>
                    </h1>
                </div>
                <div className="logo-container__item">
                    <Button 
                        size="small"
                        onClick={() => history.push(CART)}>
                        <img className="button__icon" src={shoppingBag} alt="Visit cart page"/>
                    </Button>
                </div>
            </div>
            <Navigation />
        </header>
    )
}