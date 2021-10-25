import React from 'react';

import MainContainer from '../../containers/main-container';
import FilterContainer from '../../containers/filter-container';

import './products-page.scss';

export default function ProductsPage () {

    return (
        <>
            <div className="content">
                <FilterContainer />
                <MainContainer />
            </div>
        </>
    )
}