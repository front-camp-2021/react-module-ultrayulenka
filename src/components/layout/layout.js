import React from 'react';

import Header from '../header';

import './layout.scss'

export default function Layout (props) {

    return (
        <div className="wrapper">
            <Header />
            {props.children}
        </div>
    )
}