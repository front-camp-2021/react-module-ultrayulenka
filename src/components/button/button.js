import React from 'react';

import './button.scss'

export default function Button (props) {

    const { 
    className = '', 
    color = '',
    size = '', 
    type = 'button',
    onClick = () => {}
    } = props;

    return (
        <button 
            className = {
                `button
                ${className}
                ${color? `button_${color}` : ''}
                ${size? `button_${size}` : ''}`
            }
            type = {type}
            onClick = {onClick}
        >
            {props.children}
        </button>
    )
}