import React from 'react';

import CardList from '../card-list';
import Search from '../search';

import './product-container.scss';

export default function ProductContainer () {
    return (
        <main className="main">
            <Search />
            <CardList />     
        </main>
    )
}