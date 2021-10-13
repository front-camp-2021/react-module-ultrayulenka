import React from 'react';

import Button from '../button'

import heart from './heart.svg';
import shoppingBag from './shopping-bag.svg';
import star from './star.svg';

import './card.scss';

export default function Card (props) {
    const { data = {}, tag = '', className = '' } = props;

    const { 
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = '' } = data;

    const CustomTag = tag? tag : 'div';    
    
    return (
        <CustomTag className={`card ${className}`}>
            <div className="card__inner">
                <div className="card__image">
                    <a href="#" className="card__link">
                        <img src={images[0]} alt={title} />
                    </a>
                </div>
                <div className="card__content">
                    <div className="card__details">
                        <div className="rating">
                            <span className="rating__value">{rating}</span>
                            <div className="rating__icon">
                                <img className="rating__icon" src={star} alt="Rating"/>
                            </div>
                        </div>
                        <span className="card__price">{price}</span>
                    </div>
                    <h2 className="card__title"><a href="#" className="card__link">{title}</a></h2>
                    <p className="card__description">Redesigned from scratch and completely revised.</p>
                </div>
            </div>
            <div className="card__button-group">
                <Button className="card__button">
                    <img className="button__icon" src={heart} alt="Add to wishlist"/>
                    <span className="button__text">wishlist</span>
                </Button>
                <Button className="card__button" color="primary">
                    <img className="button__icon" src={shoppingBag} alt="Add to cart"/>
                    <span className="button__text">add to cart</span>
                </Button>
            </div>
        </CustomTag>
    )
}