import React, { useState } from 'react';

import { useSelector } from "react-redux";

import { selectTotalFound } from '../../features/params/selectors';

import MainContainer from '../../containers/main-container';
import FilterContainer from '../../containers/filter-container';
import ProductsPageHeading from '../../components/products-page-heading';

import './products-page.scss';

export default function ProductsPage () {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <ProductsPageHeading 
                isSidebarOpen={isSidebarOpen}
                totalProducts={useSelector(selectTotalFound)}
                onShowSidebarClick={() => {
                    setIsSidebarOpen(prev => !prev);
                }}/>
            <div className="content">
                {isSidebarOpen && <FilterContainer />}
                <div className={isSidebarOpen? 'main' : 'main_full-width'}>
                    <MainContainer />
                </div>
            </div>
        </>
    )
}