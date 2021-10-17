import React from 'react';

import { useSelector } from "react-redux";
import { selectProducts } from '../../features/products/selectors';

import CardList from '../card-list';
import Search from '../search';

import './product-container.scss';

export default function ProductContainer () {
    const products = useSelector(selectProducts);

    return (
        <main className="main">
            <Search />
            <CardList products={products}/>     
        </main>
    )
}