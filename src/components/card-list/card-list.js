import React from 'react';

import Card from '../card'
import './card-list.scss'


export default function CardList (props) {
    
   const { products = [] } = props;

    const cards = products.map(item => {
        return <Card 
                {...item} 
                tag='li' 
                className="cards-list__item"  
                key={item.id}/>
    })

    return (
        <ul className="cards-list">
            {cards.length? cards : 'No producst found'}
        </ul>
    )
}