import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { selectPages } from '../../features/pages/selectors';
import { changePage } from '../../features/pages/actions';

import './pagination.scss'

export default function Pagination () {

    const { page, totalPages } = useSelector(selectPages);
    const dispatch = useDispatch();

    const items = [];

    const pageIndex = page - 1;

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
                    onPointerDown={() => dispatch(changePage(index + 1))}>
                    {index + 1}
                </a>
            </li>
        )
    }

    return (
        <nav className="page-navigation">
            <a className="page-navigation__page-link" 
                id="prev-page"
                onPointerDown={() => dispatch(changePage(page - 1))}/>
            <ul className="page-navigation__list">
                {items.length? items : 'No pagination'}
            </ul>
            <a className="page-navigation__page-link" 
                id="next-page"
                onPointerDown={() => dispatch(changePage(page + 1))}/>
        </nav>
    )
}