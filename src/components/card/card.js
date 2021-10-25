import React from 'react';
import { useDispatch } from "react-redux";

import Button from '../button'

import heart from './heart.svg';
import shoppingBag from './shopping-bag.svg';
import star from './star.svg';

import './card.scss';

export default function Card (props) {
    const { 
        id = '',
        images = [],
        title = '',
        rating = 0,
        price = 0,
        inWishlist = false,
        inCart = false,
        tag = '', 
        className = '',
        addToCart = () => {},
        changeWishlistStatus = () => {}
    } = props;

    const CustomTag = tag? tag : 'div';
    
    return (
        <CustomTag className={`card ${className}`}>
            <div className="card__inner">
                {
                    images.length > 0?
                    <div className="card__image">
                        <a href="#" className="card__link">
                            <img src={images[0]} alt={title} />
                        </a>
                    </div>
                    : null
                }
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
                <Button className="card__button"
                    onClick={() => {changeWishlistStatus({...props})}}>
                    <img className="button__icon" src={heart} alt="wishlist"/>
                    <span className="button__text">{`${inWishlist? "remove from" : "add to"} wishlist`}</span>
                </Button>
                <Button className="card__button" color="primary"
                    onClick={() => {addToCart({...props})}}>
                    <img className="button__icon" src={shoppingBag} alt="Add to cart"/>
                    <span className="button__text">{`${inCart? "add more to" : "add to"} cart`}</span>
                </Button>
            </div>
        </CustomTag>
    )
}