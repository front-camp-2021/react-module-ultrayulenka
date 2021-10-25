import React from 'react';

import Card from '../card'
import './card-list.scss'


export default function CardList (props) {
    
   const { products = [], addToCart = () => {}, changeWishlistStatus = () => {} } = props;

    const cards = products.map(item => {
        return <Card 
                {...item} 
                tag='li' 
                className="cards-list__item"  
                key={item.id}
                addToCart={addToCart}
                changeWishlistStatus={changeWishlistStatus}/>
    })

    return (
        <ul className="cards-list">
            {cards.length? cards : 'No producst found'}
        </ul>
    )
}