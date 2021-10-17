import React from 'react';

import { useHistory } from "react-router-dom";

import Button from '../../components/button'

import banner from './banner.jpeg'
import './home.scss'

export default function Home () {

    const history = useHistory();

    return (
        <div className="home">
            <img src={banner} className="home__banner" />
            <Button 
                size="medium" 
                color="primary" 
                className="redirect-button"
                onClick={() => history.push(`/electronics`)}>
                Go to electronics
            </Button>
        </div>
    )
}