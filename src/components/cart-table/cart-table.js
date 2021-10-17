import React from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectProductsInCart } from '../../features/products/selectors';

import Button from '../button';
import CartTableRow from '../cart-table-item/cart-table-row';

import './cart-table.scss';


export default function CartTable (props) {

    const { formatValue = value => value } = props

    const products = useSelector(selectProductsInCart);
    const total = products.reduce((prev, product) => { return prev + (product.price * product.inCartQuantity)}, 0);
    const history = useHistory();

    return (
        <div className="cart container use-bootstrap">
            <table id="cart" class="table table-hover table-condensed">
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
                            return <CartTableRow {...product} formatValue={formatValue}/>
                        })
                        : <tr>Cart is empty</tr>
                    }
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="3" class="hidden-xs"></td>
                    <td class="hidden-xs text-center"><strong>{`Total ${formatValue(total)}`}</strong></td>
                    <td colspan="1" class="hidden-xs"></td>
                </tr>
                </tfoot>
            </table>
            <div className="cart__button-group">
                <Button 
                    size="medium"
                    onClick={() => {history.push('/electronics')}}>
                    Continue shopping
                </Button>
                <Button size="medium" color="primary">Checkout</Button>
            </div>
        </div>
    );
}