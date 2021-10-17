import React, { useEffect, useState } from 'react';

import { store } from "../../store/store";
import { Provider } from "react-redux";

import Header from '../header';
import ProductContainer from '../product-container';
import FilterContainer from '../filter-container';
import Pagination from '../pagination';

import './app.scss'

export default function App () {

    //const [ pagination, setPagination ] = useState({page: 0, totalPages: 0});

    /*useEffect(() => {
        setPagination({page: 6, totalPages: 10})
    }, [])

    const changePage = (page) => {
        setPagination(prev => {
            return {
                ...prev,
                page
            };
        })
    }*/

    return (
        <div className="wrapper">
            <Provider store={store}>
                <Header />
                <div className="content">
                    <FilterContainer />
                    <ProductContainer />
                </div>
                <Pagination />
            </Provider>
        </div>
    )
}