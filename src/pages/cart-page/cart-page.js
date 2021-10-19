import React from 'react';

import { useHistory } from 'react-router-dom';
import { ELECTRONICS } from '../../routes'

import Button from '../../components/button';
import CartTable from '../../components/cart-table';

import './cart-page.scss';

export default function CartPage () {
    const history = useHistory();

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart container use-bootstrap"> 
                <CartTable />
                <div className="cart__button-group">
                    <Button 
                        size="medium"
                        onClick={() => {history.push(ELECTRONICS)}}>
                        Continue shopping
                    </Button>
                    <Button size="medium" color="primary">Checkout</Button>
                </div>
            </div>
        </div>
    )
}