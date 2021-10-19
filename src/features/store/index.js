import { createStore, combineReducers } from "redux";

import { products } from "../products/reducer";
import { wishlist } from '../wishlist/reducer';
import { cart } from '../cart/reducer'
import { pages } from "../pages/reducer";
import { params } from "../params/reducer";

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    combineReducers({
        products,
        pages,
        params,
        wishlist,
        cart
    }),
    composeWithDevTools()
)