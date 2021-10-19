import React from 'react';

import { useLocation } from "react-router-dom";
import NavigationLink from '../navigation-link';

import { startWithCapitalLetter } from '../../utils/startWithCapitalLetter'

import './navigation.scss';
import home from './home.svg';

export default function Header () {
    
    const { pathname } = useLocation();
    const paths = pathname.split('/');

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
                paths.map((path, index, paths) => {
                    if(!path || path === 'not-found') return;
                    return (
                    <NavigationLink 
                        to={`/${path}`}
                        key={path}
                        isCurrent={index === paths.length - 1}>
                        {startWithCapitalLetter(path)}
                    </NavigationLink>);
                })
            }
        </nav>
    )
}