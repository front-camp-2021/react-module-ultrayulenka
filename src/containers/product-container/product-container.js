import React, { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { getFilteredProducts } from '../../features/products/actions';
import { selectProducts, selectErrorStatus, selectLoadingStatus } from '../../features/products/selectors';
import { selectProductsInWishlistIds } from '../../features/wishlist/selectors';
import { selectProductsInCartIds } from '../../features/cart/selectors';
import { selectParams } from '../../features/params/selectors';

import CardList from '../../components/card-list';
import Search from '../../components/search';
import Pagination from '../../components/pagination'

import './product-container.scss';

export default function ProductContainer () {
    const dispatch = useDispatch();

    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoadingStatus);
    const error = useSelector(selectErrorStatus);

    const params = useSelector(selectParams); 
    const { page, totalPages } = params;

    const whishlistIds = useSelector(selectProductsInWishlistIds);
    const cartIds = useSelector(selectProductsInCartIds);

    useEffect(() => {
        dispatch(getFilteredProducts());
    },[params])

    return (
        <main className="main">
            <Search />
            {
                loading? 
                <div>Loading...</div>
                : error?
                <div>Oops! Something went wrong</div>
                :<CardList 
                products={
                    products.length  > 0?
                    products.map(product => {
                    return {
                        ...product,
                        inWishlist: whishlistIds.includes(product.id),
                        inCart: cartIds.includes(product.id)
                    }}) 
                    : []
                }/>  
            }   
            <Pagination page={page} totalPages={totalPages}/>
        </main>
    )
}