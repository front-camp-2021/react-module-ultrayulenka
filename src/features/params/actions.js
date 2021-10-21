const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';

const CHANGE_RANGE_TO_VALUE = 'CHANGE_RANGE_TO_VALUE';
const CHANGE_RANGE_FROM_VALUE = 'CHANGE_RANGE_FROM_VALUE';

const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';

const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_TOTAL_PAGES = 'CHANGE_TOTAL_PAGES';
const CHANGE_PAGE_LIMIT = 'CHANGE_PAGE_LIMIT';

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