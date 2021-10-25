import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectProductsInWishlist } from '../../features/wishlist/selectors';
import { resetAllWishlistStatuses } from '../../features/wishlist/actions';

import Button from '../../components/button';
import ProductContainer from '../../containers/product-container';

import './wishlist-page.scss'

export default function WishlistPage () {

    const dispatch = useDispatch();

    return (
        <div className="wishlist">
            <Button
                size="medium"
                color="primary"
                onClick={() => dispatch(resetAllWishlistStatuses())}>
                CLEAR ALL ITEMS
            </Button>
            <ProductContainer products={useSelector(selectProductsInWishlist)}/>
        </div>
    )
}