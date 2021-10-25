import React, { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useSelector, useDispatch } from "react-redux";
import { getFilteredProducts } from '../../features/products/actions';
import { selectProducts, selectErrorStatus, selectLoadingStatus } from '../../features/products/selectors';
import { selectParams } from '../../features/params/selectors';
import { changeSearchQuery } from '../../features/params/actions';

import Search from '../../components/search';
import Pagination from '../../components/pagination';
import ProductContainer from '../product-container';


import './main-container.scss';

export default function MainContainer () {

    const dispatch = useDispatch();

    const { 
        page,
        totalPages,
        selectedFilters,
        ranges,
        search,
        totalFound 
    } = useSelector(selectParams);

    useEffect(() => {
        dispatch(getFilteredProducts());
    },[page, selectedFilters, ranges, search]);

    const debouncedChangeSearchQuery = useDebouncedCallback((value) => {
        dispatch(changeSearchQuery(value));
    }, 500)

    return (
        <main className="main">
            <Search 
                searchQuery={search}
                onChange={debouncedChangeSearchQuery}
                total={totalFound}/>
            <ProductContainer 
                products={useSelector(selectProducts)} 
                loading={useSelector(selectLoadingStatus)} 
                error={useSelector(selectErrorStatus)}/>
            <Pagination page={page} totalPages={totalPages}/>
        </main>
    )
}