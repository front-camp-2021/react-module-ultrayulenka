import React from 'react';

import { useHistory } from "react-router-dom";
import { HOME } from '../../routes'

import Button from '../../components/button'

import picture from './not-found.svg'
import './not-found.scss'

export default function NotFound () {

    const history = useHistory();

    return (
        <div className="not-found">
            <img src={picture} className="not-found__img" />
            <div className="not-found__container">
                <h2>Page Not Found</h2>
                <p className="not-found__text">
                    Oops! We can't find the page you're looking for.
                </p>
                <Button 
                    size="medium" 
                    color="primary" 
                    className="redirect-button"
                    onClick={() => history.push(HOME)}>
                    Go home
                </Button>
            </div>
        </div>
    )
}