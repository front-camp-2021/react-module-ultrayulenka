import { 
    CHANGE_PAGE,
    CHANGE_TOTAL_PAGES,
    CHANGE_PAGE_LIMIT,
    ADD_FILTER,
    REMOVE_FILTER,
    CLEAR_ALL_FILTERS,
    CHANGE_RANGE_TO_VALUE,
    CHANGE_RANGE_FROM_VALUE,
    CHANGE_SEARCH_QUERY
} from './actions';

const paramsInitialState = {
    filters: [],
    ranges: {
        'Price': {
            min: 0,
            max: 85000,
            precision: 0,
            selected: {
                from: 0,
                to: 85000
            }
        },
        'Rating': {
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
    totalPages: 0,
    pageLimit: 10
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

        case ADD_FILTER: {
            const { filters } = state;

            return {
                ...state,
                page: 1,
                filters: [...filters, action.payload]
            }
        }

        case REMOVE_FILTER: {
            const { filters } = state;
            const index = filters.findIndex(item => item === action.payload);
           
            if(index < 0) return state;

            return {
                ...state,
                page: 1,
                filters: [...filters.slice(0, index), ...filters.slice(index+1)]
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
            return paramsInitialState;
        }

        default: return state;
    }
}

export {
    params,
    paramsInitialState
}