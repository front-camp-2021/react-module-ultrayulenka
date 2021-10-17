import { createStore, combineReducers } from "redux";

import { products } from "../features/products/reducers/products";
import { pages } from "../features/pages/reducers/pages";
import { params } from "../features/params/reducers/params";

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    combineReducers({
        products,
        pages,
        params
    }),
    composeWithDevTools()
)