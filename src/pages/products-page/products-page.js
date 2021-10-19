import React from 'react';

import ProductContainer from '../../containers/product-container';
import FilterContainer from '../../containers/filter-container';
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