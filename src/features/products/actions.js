import {
    fetchAllProducts,
    fetchFilteredProducts
} from '../../api'

import {
    changeTotalFound
} from '../params/actions';

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';
const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

function getAllProducts () {
    return (dispatch) => {
        dispatch(getProductsLoading());
        fetchAllProducts().then(res => {
            const products = res.data;
            dispatch(getProductsSuccess(products));
        }).catch(() => {
            dispatch(getProductsError())
        })
    }
};

function getFilteredProducts () {
    return (dispatch, getState) => {
        dispatch(getProductsLoading());
        const { selectedFilters, ranges, page, pageLimit = 10, search } = getState().params;

        fetchFilteredProducts({ filters: selectedFilters, ranges, page, pageLimit, search }).then(res => {
            const [products, total] = res;
            dispatch(getProductsSuccess(products));
            dispatch(changeTotalFound(total));
        }).catch(() => {
            dispatch(getProductsError())
        })
    }
}

function getProductsSuccess (payload) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload
    }
}

function getProductsLoading () {
    return {
        type: GET_PRODUCTS_LOADING
    }
}

function getProductsError () {
    return {
        type: GET_PRODUCTS_ERROR
    }
}

export {
    GET_ALL_PRODUCTS,
    GET_FILTERED_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    getProductsLoading,
    getAllProducts,
    getFilteredProducts,
    getProductsSuccess,
    getProductsError
}