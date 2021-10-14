import React from 'react';

import './pagination.scss'

export default function Pagination (props) {

    const { page, totalPages, changePage } = props;

    const pageIndex = page - 1;

    const items = [];

    const goToPage = (index) => {
        if(index === pageIndex) return;
        changePage(index + 1);
    }

    const goToPrevPage = () => {
        if(page - 1 <= 0) return;
        changePage(page - 1);
    }

    const goToNextPage = () => {
        if(page + 1 > totalPages) return;
        changePage(page + 1);
    }

    for(let index = 0; index < totalPages; index++) {
        const modificator = index === pageIndex? 'current':
                            index === pageIndex - 1? 'prev':
                            index === pageIndex + 1? 'next': '';

        items.push(
            <li className={
                `page-navigation__item
                ${modificator? `page-navigation__item_${modificator}` : ''}`}
                key={index}>
                <a href="#" 
                    className="page-navigation__page-link"
                    onPointerDown={() => goToPage(index)}>
                    {index + 1}
                </a>
            </li>
        )
    }

    return (
        <nav className="page-navigation">
            <a className="page-navigation__page-link" 
                id="prev-page"
                onPointerDown={goToPrevPage}/>
            <ul className="page-navigation__list">
                {items}
            </ul>
            <a className="page-navigation__page-link" 
                id="next-page"
                onPointerDown={goToNextPage}/>
        </nav>
    )
}