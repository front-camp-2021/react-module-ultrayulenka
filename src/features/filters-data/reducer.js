import {
    GET_FILTER_SUCCESS,
    GET_FILTER_LOADING,
    GET_FILTER_ERROR
} from './actions'

const filtersInitialState = {
    category: {
        title: "Category",
        list: [],
        loading: false,
        error: false
    },

    brand: {
        title: "Brand",
        list: [],
        loading: false,
        error: false
    }
}

function filtersData (state = filtersInitialState, action) {
    switch(action.type) {
        case GET_FILTER_SUCCESS: {
            const { list, name } = action.payload;

            return {
                ...state,
                [name]: {
                    ...state[name],
                    list,
                    loading: false,
                    error: false
                }
            }
        }

        case GET_FILTER_LOADING: {
            const name = action.payload;

            return {
                ...state,
                [name]: {
                    ...state[name],
                    loading: true,
                    error: false
                }
            }
        }

        case GET_FILTER_ERROR: {
            const name = action.payload;

            return {
                ...state,
                [name]: {
                    ...state[name],
                    loading: false,
                    error: true
                }
            }
        }

        default: return state;
    }
}

export {
    filtersData,
    filtersInitialState
}