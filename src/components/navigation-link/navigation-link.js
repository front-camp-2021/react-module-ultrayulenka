import React from 'react';
import './navigation-link.scss';

export default function NavigationLink (props) {
    const { isCurrent = false, href = '#' } = props;

    return (
        <>
            <a href={href} className={`nav__link ${isCurrent? 'nav__link_current': ''}`}>
                <div className="home-icon">
                    {props.children}
                </div>  
            </a>
            {!isCurrent && <div className="arrows arrows_right"></div>}
        </>
    )
}