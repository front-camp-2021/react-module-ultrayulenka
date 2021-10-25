import React, { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { getFilteredProducts } from '../../features/products/actions';
import { selectProducts, selectErrorStatus, selectLoadingStatus } from '../../features/products/selectors';
import { selectParams } from '../../features/params/selectors';

import Search from '../../components/search';
import Pagination from '../../components/pagination';
import ProductContainer from '../product-container';


import './main-container.scss';

export default function MainContainer () {
    const dispatch = useDispatch();
    
    const { page, totalPages, selectedFilters, ranges, search } = useSelector(selectParams);

    useEffect(() => {
        dispatch(getFilteredProducts());
    },[page, selectedFilters, ranges, search]);

    return (
        <main className="main">
            <Search />
            <ProductContainer 
                products={useSelector(selectProducts)} 
                loading={useSelector(selectLoadingStatus)} 
                error={useSelector(selectErrorStatus)}/>
            <Pagination page={page} totalPages={totalPages}/>
        </main>
    )
}