import {
    fetchCategories,
    fetchBrands
} from '../../api'

const GET_ALL_FILTERS = 'GET_ALL_FILTERS';
const GET_FILTER_SUCCESS = 'GET_FILTER_SUCCESS';
const GET_FILTER_LOADING = 'GET_FILTER_LOADING';
const GET_FILTER_ERROR = 'GET_FILTER_ERROR';
const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';

const CHANGE_RANGE_TO_VALUE = 'CHANGE_RANGE_TO_VALUE';
const CHANGE_RANGE_FROM_VALUE = 'CHANGE_RANGE_FROM_VALUE';

const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';

const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_TOTAL_PAGES = 'CHANGE_TOTAL_PAGES';
const CHANGE_PAGE_LIMIT = 'CHANGE_PAGE_LIMIT';
const CHANGE_TOTAL_FOUND = 'CHANGE_TOTAL_FOUND';

function getAllFilters () {
    return (dispatch) => {
        dispatch(getFilterLoading('Category'));
        dispatch(getFilterLoading('Brand'));

        fetchCategories().then(res => {
            dispatch(getFilterSuccess({ list: res, name: 'Category'}))
        }).catch(() => {
            dispatch(getFilterError('Category'));
        });

        fetchBrands().then(res => {
            dispatch(getFilterSuccess({ list: res, name: 'Brand'}))
        }).catch(() => {
            dispatch(getFilterError('Brand'));
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

function changePage (payload) {
    return {
        type: CHANGE_PAGE,
        payload
    };
};

function changePageLimit (payload) {
    return {
        type: CHANGE_PAGE_LIMIT,
        payload
    }
}

function changeTotalPages (payload) {
    return {
        type: CHANGE_TOTAL_PAGES,
        payload
    }
};

function changeTotalFound (payload) {
    return {
        type: CHANGE_TOTAL_FOUND,
        payload
    }
}

function changeSearchQuery (payload) {
    return {
        type: CHANGE_SEARCH_QUERY,
        payload
    };
};

function clearAllFilters () {
    return {
        type: CLEAR_ALL_FILTERS
    }
};

function addFilter (payload) {
    return {
        type: ADD_FILTER,
        payload
    }
}

function removeFilter (payload) {
    return {
        type: REMOVE_FILTER,
        payload
    }
}

function changeRangeToValue (payload) {
    return {
        type: CHANGE_RANGE_TO_VALUE,
        payload
    }
}

function changeRangeFromValue (payload) {
    return {
        type: CHANGE_RANGE_FROM_VALUE,
        payload
    }
}

export {
    CHANGE_PAGE,
    CHANGE_TOTAL_PAGES,
    CHANGE_PAGE_LIMIT,
    ADD_FILTER,
    REMOVE_FILTER,
    CLEAR_ALL_FILTERS,
    CHANGE_RANGE_TO_VALUE,
    CHANGE_RANGE_FROM_VALUE,
    CHANGE_SEARCH_QUERY, 
    GET_ALL_FILTERS,
    GET_FILTER_SUCCESS,
    GET_FILTER_LOADING,
    GET_FILTER_ERROR,
    CHANGE_TOTAL_FOUND,
    changeTotalFound,
    getAllFilters,
    getFilterSuccess,
    getFilterLoading,
    getFilterError,
    changePage,
    changePageLimit,
    changeTotalPages,
    clearAllFilters,
    addFilter,
    removeFilter,
    changeRangeToValue,
    changeRangeFromValue,
    changeSearchQuery
}