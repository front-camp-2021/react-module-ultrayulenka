import React from 'react';
import NavigationLink from '../navigation-link';
import './header.scss';
import logo from './logo.svg';

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
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.25L8.61984 1L16.2397 6.25V14.5C16.2397 15.3284 15.4816 16 14.5464 16H2.6933C1.75811 16 1 15.3284 1 14.5V6.25Z" stroke="#7E72F2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5.68909 16V8H11.5505V16" stroke="#7E72F2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>  
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