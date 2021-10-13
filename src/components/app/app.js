import React from 'react';

import Header from '../header';
import ProductContainer from '../product-container';
import FilterContainer from '../filter-container';
import Pagination from '../pagination';

import './app.scss'

export default function App () {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <FilterContainer />
                <ProductContainer />
            </div>
            <Pagination page={6} totalPages={10}/>
        </div>
    )
}