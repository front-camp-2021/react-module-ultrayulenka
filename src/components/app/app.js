import React from 'react';

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Layout from '../layout';
import ProductsPage from '../../pages/products-page';
import WishlistPage from '../../pages/wishlist-page';
import CartPage from '../../pages/cart-page';
import Home from '../../pages/home';
import NotFound from '../../pages/not-found'

import './app.scss'

export default function App () {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/electronics">
                        <ProductsPage />
                    </Route>

                    <Route exact path="/wishlist">
                        <WishlistPage />
                    </Route>

                    <Route exact path="/cart">
                        <CartPage />
                    </Route>

                    <Route exact path="/not-found" component={NotFound} />

                    <Redirect to="/not-found" />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}