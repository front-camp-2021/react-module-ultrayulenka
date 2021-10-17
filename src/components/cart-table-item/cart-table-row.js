import React from 'react';

import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from '../../features/products/actions';

import './cart-table-row.scss';
import 'font-awesome/css/font-awesome.min.css';

export default function CartTableRow (props) {

    const { 
        id,
        title = '', 
        price = 0, 
        images = [], 
        inCartQuantity = 0, 
        formatValue = value => value
    } = props;

    const subtotal = price * inCartQuantity;
    const dispatch = useDispatch();

    return (
        <tr>
            <td data-th="Product">
            <div class="row">
                <div class="col-sm-4 hidden-xs">
                    <img src={images[0]} alt="" class="img-responsive" className="cart__image"/>
                </div>
                <div class="col-sm-8">
                    <p className="cart__title">{title}</p>
                </div>
            </div>
            </td>
            <td data-th="Price">{formatValue(price)}</td>
            <td data-th="Quantity">
                <input 
                    type="number" 
                    class="form-control text-center" 
                    value={inCartQuantity}
                    min={1}
                    onChange={event => {dispatch(changeQuantity({id, quantity: event.target.value}))}}/>
            </td>
            <td data-th="Subtotal" class="text-center">{formatValue(subtotal)}</td>
            <td class="actions" data-th="">
                <button 
                class="btn btn-danger btn-sm"
                onClick={() => {dispatch(removeFromCart(id))}}>
                    <i class="fa fa-trash-o"></i>
                </button>
            </td>
        </tr>
    );
}