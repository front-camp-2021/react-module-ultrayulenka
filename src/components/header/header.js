import React from 'react';
import NavigationLink from '../navigation-link';
import './header.scss';
import logo from './logo.svg';
import home from './home.svg';

export default function Header () {
    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo">
                    <a href="#" className="link"> 
                        <img className="logo__icon" src={logo} alt=""/>
                    </a>
                </div>
                <h1 className="title">
                    <a href="#" className="link">
                        Online Store
                    </a>
                </h1>
            </div>
            <nav className="nav">
                <NavigationLink>
                    <div className="home-icon">
                     <img src={home} alt="home"/>
                    </div>  
                </NavigationLink>

                <NavigationLink>
                    eCommerce
                </NavigationLink>

                <NavigationLink isCurrent={true}>
                    Electronics
                </NavigationLink>
            </nav>
        </header>
    )
}