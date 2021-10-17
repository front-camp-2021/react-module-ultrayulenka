import React from 'react';

import { useLocation } from "react-router-dom";
import NavigationLink from '../navigation-link';

import './navigation.scss';
import home from './home.svg';

export default function Header () {
    
    const { pathname } = useLocation();

    return (
        <nav className="nav">
            <NavigationLink 
                to="/"
                isCurrent={pathname.endsWith('/') || pathname === '/not-found'}>
                <div className="home-icon">
                    <img src={home} alt="home"/>
                </div>  
            </NavigationLink>
            {
                pathname.includes('electronics')?
                <NavigationLink 
                    to="/electronics"
                    isCurrent={pathname.endsWith('electronics')}>
                    Electronics
                </NavigationLink>
                : pathname.includes('wishlist')? 
                <NavigationLink         
                    to="/wishlist"
                    isCurrent={pathname.endsWith('wishlist')}>
                    Wishlist
                </NavigationLink>
                : pathname.includes('cart')? 
                <NavigationLink         
                    to="/cart"
                    isCurrent={pathname.endsWith('cart')}>
                    Cart
                </NavigationLink>
                : null
            }
        </nav>
    )
}