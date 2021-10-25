import { 
    CHANGE_PAGE,
    CHANGE_TOTAL_PAGES,
    CHANGE_PAGE_LIMIT,
    ADD_FILTER,
    REMOVE_FILTER,
    CLEAR_ALL_FILTERS,
    CHANGE_RANGE_TO_VALUE,
    CHANGE_RANGE_FROM_VALUE,
    CHANGE_SEARCH_QUERY, 
    GET_FILTER_SUCCESS,
    GET_FILTER_LOADING,
    GET_FILTER_ERROR,
    CHANGE_TOTAL_FOUND
} from './actions';

const paramsInitialState = {
    filters: {
        'Category': {
            title: "Category",
            list: [],
            loading: false,
            error: false
        },

        'Brand': {
            title: "Brand",
            list: [],
            loading: false,
            error: false
        }
    },

    selectedFilters: [],

    ranges: {
        'Price': {
            title: "Price",
            min: 0,
            max: 85000,
            precision: 0,
            selected: {
                from: 0,
                to: 85000
            },
            formatValue: value => value + ' UAH'
        },
        'Rating': {
            title: 'Rating',
            min: 0, 
            max: 5,
            precision: 2,
            selected: {
                from: 0,
                to: 5
            }
        }
    },

    search: '',
    page: 1,
    totalPages: 10,
    pageLimit: 10,
    totalFound: 100
}

function params (state = paramsInitialState, action) {
    switch(action.type) {
        case CHANGE_PAGE: {
            if(
                action.payload === state.page 
                || action.payload <= 0 
                || action.payload > state.totalPages
            ) return {...state};
            return {
                ...state, 
                page: action.payload 
            }
        }

        case CHANGE_PAGE_LIMIT: {
            return {
                ...state,
                pageLimit: action.payload
            }
        }

        case CHANGE_TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.payload
            }
        }

        case CHANGE_TOTAL_FOUND: {
            return {
                ...state,
                totalFound: action.payload,
                totalPages: Math.ceil(action.payload / state.pageLimit)
            }
        }

        case GET_FILTER_SUCCESS: {
            const { list, name } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: {
                        ...state.filters[name],
                        list,
                        loading: false,
                        error: false
                    }
                }
            }
        }

        case GET_FILTER_LOADING: {
            const name = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: {
                        ...state.filters[name],
                        loading: true,
                        error: false
                    }
                }
            }
        }

        case GET_FILTER_ERROR: {
            const name = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: {
                        ...state.filters[name],
                        loading: false,
                        error: true
                    }
                }
            }
        }

        case ADD_FILTER: {
            const { selectedFilters } = state;

            return {
                ...state,
                page: 1,
                selectedFilters: [...selectedFilters, action.payload]
            }
        }

        case REMOVE_FILTER: {
            const { selectedFilters } = state;
            const index = selectedFilters.findIndex(item => item === action.payload);
           
            if(index < 0) return state;

            return {
                ...state,
                page: 1,
                selectedFilters: [...selectedFilters.slice(0, index), ...selectedFilters.slice(index + 1)]
            }
        }

        case CHANGE_RANGE_TO_VALUE: {
            const { name, to } = action.payload;

            return {
                ...state,
                page: 1,
                ranges: {
                    ...state.ranges,
                    [name]: {
                        ...state.ranges[name],
                        selected: {
                            ...state.ranges[name].selected,
                            to
                        }
                    }
                }
            }
        }

        case CHANGE_RANGE_FROM_VALUE: {
            const { name, from } = action.payload;

            return {
                ...state,
                page: 1,
                ranges: {
                    ...state.ranges,
                    [name]: {
                        ...state.ranges[name],
                        selected: {
                            ...state.ranges[name].selected,
                            from
                        }
                    }
                }
            }
        }

        case CHANGE_SEARCH_QUERY: {
            return { 
                ...state,
                page: 1,
                search: action.payload
            }
        }

        case CLEAR_ALL_FILTERS: {
            const { ranges } = state;
            let resetedRanges = {};

            for(let key of Object.keys(ranges)){
                resetedRanges[key] = {
                    ...ranges[key],
                    selected: {
                        from: ranges[key].min,
                        to: ranges[key].max,
                    }
                }
            }

            return {
                ...state,
                selectedFilters: [],
                ranges: {
                    ...state.ranges,
                    ...resetedRanges
                },
                search: '',
                page: 1,
                totalPages: 10,
                pageLimit: 10
            }
        }

        default: return state;
    }
}

export {
    params,
    paramsInitialState
}