import {
    fetchCategories,
    fetchBrands
} from '../../api'

const GET_ALL_FILTERS = 'GET_ALL_FILTERS';
const GET_FILTER_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_FILTER_LOADING = 'GET_PRODUCTS_LOADING';
const GET_FILTER_ERROR = 'GET_PRODUCTS_ERROR';

function getAllFilters () {
    return (dispatch) => {
        dispatch(getFilterLoading('category'));
        dispatch(getFilterLoading('brand'));

        fetchCategories().then(res => {
            dispatch(getFilterSuccess({ list: res, name: 'category'}))
        }).catch(() => {
            dispatch(getFilterError('category'));
        });

        fetchBrands().then(res => {
            dispatch(getFilterSuccess({ list: res, name: 'brand'}))
        }).catch(() => {
            dispatch(getFilterError('brand'));
        });
    }
};

function getFilterSuccess (payload) {
    return {
        type: GET_FILTER_SUCCESS,
        payload
    }
}

function getFilterLoading (payload) {
    return {
        type: GET_FILTER_LOADING,
        payload
    }
}

function getFilterError (payload) {
    return {
        type: GET_FILTER_ERROR,
        payload
    }
}

export {
    GET_ALL_FILTERS,
    GET_FILTER_SUCCESS,
    GET_FILTER_LOADING,
    GET_FILTER_ERROR,
    getAllFilters,
    getFilterSuccess,
    getFilterLoading,
    getFilterError
}