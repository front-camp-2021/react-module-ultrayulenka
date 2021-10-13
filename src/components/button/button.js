import React from 'react';

import './button.scss'

export default function Button (props) {

    const { 
    className = '', 
    color = '',
    size = '', 
    type = 'button',
    onOclick = () => {}
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
            onClick = {onOclick}
        >
            {props.children}
        </button>
    )
}