import React from 'react';

import { useSelector } from "react-redux";
import { selectProductsInCart } from '../../features/cart/selectors';

import CartTableRow from '../cart-table-row';

import './cart-table.scss';


export default function CartTable (props) {

    const { formatValue = value => value } = props

    const products = useSelector(selectProductsInCart);
    const total = products.reduce((prev, product) => { return prev + (product.price * product.quantity)}, 0);

    return (
        <table id="cart" className="table table-hover table-condensed">
            <thead>
            <tr>
                <th className="th_product">Product</th>
                <th sclassName="th_price">Price</th>
                <th className="th_quantity">Quantity</th>
                <th className="th_subtotal text-center">Subtotal</th>
                <th className="th_btn"></th>
            </tr>
            </thead>
            <tbody>
                {
                    products.length? 
                    products.map(product => {
                        return <CartTableRow {...product} key={product.id} formatValue={formatValue}/>
                    })
                    : <tr>Cart is empty</tr>
                }
            </tbody>
            <tfoot>
            <tr>
                <td colspan="3" className="hidden-xs"></td>
                <td className="hidden-xs text-center"><strong>{`Total ${formatValue(total)}`}</strong></td>
                <td colspan="1" className="hidden-xs"></td>
            </tr>
            </tfoot>
        </table>
    );
}