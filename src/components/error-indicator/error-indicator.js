import React from 'react';

import './error-indicator.scss'
import error from './error.png'

export default function ErrorIndicator () {

    return (
        <div className="error-container">
            <div className="error-indicator">
                <img className="error-indicator__icon" src={error} alt='Error'/>
                <div className="error-indicator__text">
                    <h2>Error! Something gone wrong...</h2>
                    <p>Sorry, we can't load this resource now. Please try again later.</p>
                </div>
            </div>
        </div>
    )
}