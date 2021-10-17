import React from 'react';

import ProductContainer from '../../components/product-container';
import FilterContainer from '../../components/filter-container';
import Pagination from '../../components/pagination';

import './products-page.scss';

export default function ProductsPage () {

    return (
        <>
            <div className="content">
                <FilterContainer />
                <ProductContainer />
            </div>
            <Pagination />
        </>
    )
}