import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import { products } from '../products/reducer';
import { wishlist } from '../wishlist/reducer';
import { cart } from '../cart/reducer'
import { params } from '../params/reducer';

export const store = createStore(
    combineReducers({
        products,
        params,
        wishlist,
        cart
    }),
    composeWithDevTools(applyMiddleware(thunk))
)