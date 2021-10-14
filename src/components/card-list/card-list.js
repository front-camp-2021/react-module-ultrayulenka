import React from 'react';
import Card from '../card'
import './card-list.scss'


export default function CardList (props) {

    const { data } = props;

    const cards = data.map(item => {
        return <Card data={item} tag='li' className="cards-list__item"  key={item.id}/>
    })

    return (
        <ul className="cards-list">
            {cards}
        </ul>
    )
}