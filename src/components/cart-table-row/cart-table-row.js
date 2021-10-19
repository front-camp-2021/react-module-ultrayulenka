import React from 'react';

import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from '../../features/cart/actions';

import './cart-table-row.scss';
import 'font-awesome/css/font-awesome.min.css';

export default function CartTableRow (props) {

    const { 
        id,
        title = '', 
        price = 0, 
        images = [], 
        quantity = 0, 
        formatValue = value => value
    } = props;

    const subtotal = price * quantity;
    const dispatch = useDispatch();

    return (
        <tr>
            <td data-th="Product">
            <div className="row">
                <div className="col-sm-4 hidden-xs">
                    <img src={images[0]} alt="" className="img-responsive" className="cart__image"/>
                </div>
                <div className="col-sm-8">
                    <p className="cart__title">{title}</p>
                </div>
            </div>
            </td>
            <td data-th="Price">{formatValue(price)}</td>
            <td data-th="Quantity">
                <input 
                    type="number" 
                    className="form-control text-center" 
                    value={quantity}
                    min={1}
                    onChange={event => {dispatch(changeQuantity({id, quantity: event.target.value}))}}/>
            </td>
            <td data-th="Subtotal" className="text-center">{formatValue(subtotal)}</td>
            <td className="actions" data-th="">
                <button 
                className="btn btn-danger btn-sm"
                onClick={() => {dispatch(removeFromCart(id))}}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </td>
        </tr>
    );
}