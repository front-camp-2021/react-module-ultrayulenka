import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectProductsInWishlist } from '../../features/wishlist/selectors';
import { selectProductsInCartIds } from '../../features/cart/selectors';
import { resetAllWishlistStatuses } from '../../features/wishlist/actions';

import CardList from '../../components/card-list';
import Button from '../../components/button';

import './wishlist-page.scss'

export default function WishlistPage () {

    const products = useSelector(selectProductsInWishlist);
    const cartIds = useSelector(selectProductsInCartIds);
    const dispatch = useDispatch();

    return (
        <div className="wishlist">
            <Button
                size="medium"
                color="primary"
                onClick={() => dispatch(resetAllWishlistStatuses())}>
                CLEAR ALL ITEMS
            </Button>
            <CardList products={
                products.map(product => { 
                    return {
                        ...product,
                        inWishlist: true,
                        inCart: cartIds.includes(product.id)
                    }
                })
            }/>
        </div>
    )
}