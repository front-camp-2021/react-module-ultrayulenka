import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectProductsInWishlistIds } from '../../features/wishlist/selectors';
import { selectProductsInCartIds } from '../../features/cart/selectors';
import { changeWishlistStatus } from '../../features/wishlist/actions'
import { addToCart } from "../../features/cart/actions";

import CardList from '../../components/card-list';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

import './product-container.scss';

export default function ProductContainer (props) {

    const {
        products = [],
        loading = false,
        error = false
    } = props;

    const dispatch = useDispatch();

    const whishlistIds = useSelector(selectProductsInWishlistIds);
    const cartIds = useSelector(selectProductsInCartIds);

    const onWishlistStatusChange = ({ id = '', images = [], title = '', rating = 0, price = 0 }) => {
        dispatch(changeWishlistStatus({id, images, title, rating, price}));
    }

    const onAddToCartClick = ({ id = '', images = [], title = '', price = 0 }) => {
        dispatch(addToCart({id, images, title, price}));
    }


    if(loading) {
        return <Spinner />;
    }

    if(error) {
        return <ErrorIndicator />
    }


    return (
        <CardList 
            products={
                products.length  > 0?
                products.map(product => {
                return {
                    ...product,
                    inWishlist: whishlistIds.includes(product.id),
                    inCart: cartIds.includes(product.id)
                }}) 
                : []
            }
            addToCart={onAddToCartClick}
            changeWishlistStatus={onWishlistStatusChange}/> 
    )
}