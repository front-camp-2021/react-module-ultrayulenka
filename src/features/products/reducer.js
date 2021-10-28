import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR
} from './actions'

const productsInitialState = {
  items: [],
  loading: false,
  error: false
};

function products (state = productsInitialState, action) {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS: {
          return {
            items: action.payload,
            loading: false,
            error: false
          }
        }

        case GET_PRODUCTS_LOADING: {
          return {
            ...state,
            error: false,
            loading: true
          }
        }

        case GET_PRODUCTS_ERROR: {
          return {
            ...state,
            loading: false,
            error: true
          }
        }
        default: return state;
    }
}

export {
    productsInitialState,
    products
}