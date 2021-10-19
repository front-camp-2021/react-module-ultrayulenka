import { 
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
            from: 0,
            to: 85000
        },
        'Rating': {
            from: 0,
            to: 5
        }
    },
    search: ''
}

function params (state = paramsInitialState, action) {
    switch(action.type) {
        case ADD_FILTER: {
            const { filters } = state;

            return {
                ...state,
                filters: [...filters, action.payload]
            }
        }

        case REMOVE_FILTER: {
            const { filters } = state;
            const index = filters.findIndex(item => item === action.payload);
           
            if(index < 0) return state;

            return {
                ...state,
                filters: [...filters.slice(0, index), ...filters.slice(index+1)]
            }
        }

        case CHANGE_RANGE_TO_VALUE: {
            const { name, to, precision } = action.payload;

            return {
                ...state,
                ranges: {
                    ...state.ranges,
                    [name]: {
                        ...state.ranges[name],
                        to: roundValue({value: to, precision})
                    }
                }
            }
        }

        case CHANGE_RANGE_FROM_VALUE: {
            const { name, from, precision } = action.payload;

            return {
                ...state,
                ranges: {
                    ...state.ranges,
                    [name]: {
                        ...state.ranges[name],
                        from: roundValue({value: from, precision})
                    }
                }
            }
        }

        case CHANGE_SEARCH_QUERY: {
            return { 
                ...state,
                search: action.payload
            }
        }

        case CLEAR_ALL_FILTERS: {
            return paramsInitialState;
        }

        default: return state;
    }
}

const roundValue = ({ value, precision }) => {
    const newValue = value * Math.pow(10, precision);
    const res = Math.round(newValue) / Math.pow(10, precision)
    return res;
}

export {
    params,
    paramsInitialState
}