import React from 'react';

import './pagination.scss'

export default function Pagination (props) {

    const { page, totalPages } = props;

    const pageIndex = page - 1;

    
    const items = [];

    for(let index = 0; index < totalPages; index++) {
        const modificator = index === pageIndex? 'current':
                            index === pageIndex - 1? 'prev':
                            index === pageIndex + 1? 'next': '';

        items.push(
            <li className={
                `page-navigation__item
                ${modificator? `page-navigation__item_${modificator}` : ''}`
            }>
                <a href="#" className="page-navigation__page-link">
                    {index + 1}
                </a>
            </li>
        )
    }

    return (
        <nav class="page-navigation">
            <a class="page-navigation__page-link" id="prev-page"></a>
            <ul class="page-navigation__list">
                {items}
            </ul>
            <a class="page-navigation__page-link" id="next-page"></a>
        </nav>
    )
}