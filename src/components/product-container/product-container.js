import React from 'react';

import { useSelector } from "react-redux";
import { selectProducts } from '../../features/products/selectors';
import { selectProductsInWishlistIds } from '../../features/wishlist/selectors';
import { selectProductsInCartIds } from '../../features/cart/selectors';

import CardList from '../card-list';
import Search from '../search';

import './product-container.scss';

export default function ProductContainer () {
    const products = useSelector(selectProducts);
    const whishlistIds = useSelector(selectProductsInWishlistIds);
    const cartIds = useSelector(selectProductsInCartIds);

    return (
        <main className="main">
            <Search />
            <CardList 
                products={products.map(product => {
                    return {
                        ...product,
                        inWishlist: whishlistIds.includes(product.id),
                        inCart: cartIds.includes(product.id)
                    } 
                })} />     
        </main>
    )
}