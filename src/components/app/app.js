import React from 'react';

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { routes } from '../../routes';

import Layout from '../layout';

import './app.scss'

export default function App () {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {
                        routes.map(({exact, path, component}) => {
                            return (
                            <Route 
                                exact={exact} 
                                path={path} 
                                component={component}/>);
                        })
                    }

                    <Redirect to="/not-found" />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}