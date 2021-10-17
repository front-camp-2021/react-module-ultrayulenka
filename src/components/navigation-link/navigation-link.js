import React from 'react';

import { NavLink } from "react-router-dom";

import './navigation-link.scss';

export default function NavigationLink (props) {
    const { isCurrent = false, to } = props;

    return (
        <>
            <NavLink  
            to={to} 
            className={`nav__link ${isCurrent? 'nav__link_current': ''}`}>
                <div className="home-icon">
                    {props.children}
                </div>  
            </NavLink>
            {!isCurrent && <div className="arrows arrows_right"></div>}
        </>
    )
}