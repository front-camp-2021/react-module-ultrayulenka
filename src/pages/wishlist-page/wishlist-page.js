import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectProductsInWishlist } from '../../features/products/selectors';
import { resetAllWishlistStatuses } from '../../features/products/actions';

import CardList from '../../components/card-list';
import Button from '../../components/button';

import './wishlist-page.scss'

export default function WishlistPage () {

    const products = useSelector(selectProductsInWishlist);
    const dispatch = useDispatch();

    return (
        <div className="wishlist">
            <Button
                size="medium"
                color="primary"
                onClick={() => dispatch(resetAllWishlistStatuses())}>
                CLEAR ALL ITEMS
            </Button>
            <CardList products={products}/>
        </div>
    )
}