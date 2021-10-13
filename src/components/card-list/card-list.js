import React from 'react';
import Card from '../card'
import './card-list.scss'

import { products } from './products'

export default function CardList () {

    const cards = products.map(product => {
        return <Card data={product} tag='li' className="cards-list__item"  key={product.id}/>
    })

    return (
        <ul className="cards-list">
            {cards}
        </ul>
    )
}