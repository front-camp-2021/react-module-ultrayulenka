import React, { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useSelector, useDispatch } from "react-redux";
import { selectParams } from '../../features/params/selectors';
import { getFilteredProducts } from '../../features/products/actions';
import { selectProducts, selectErrorStatus, selectLoadingStatus } from '../../features/products/selectors';
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
        search
    } = useSelector(selectParams);

    useEffect(() => {
        dispatch(getFilteredProducts());
    },[page, selectedFilters, ranges, search]);

    const debouncedChangeSearchQuery = useDebouncedCallback((value) => {
        dispatch(changeSearchQuery(value));
    }, 500)

    return (
        <>
            <Search 
                searchQuery={search}
                onChange={debouncedChangeSearchQuery} />
            <ProductContainer 
                products={useSelector(selectProducts)} 
                loading={useSelector(selectLoadingStatus)} 
                error={useSelector(selectErrorStatus)}/>
            <Pagination page={page} totalPages={totalPages}/>
        </>
    )
}