import React from 'react';

import CartTable from '../../components/cart-table';

import './cart-page.scss';

export default function CartPage () {

    return (
        <div className="cart-container"> 
            <h2>Cart</h2>
            <CartTable />
        </div>
    )
}