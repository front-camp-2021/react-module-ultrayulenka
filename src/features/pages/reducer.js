import {
    CHANGE_PAGE,
    CHANGE_TOTAL_PAGES
} from './actions'

const pagesInitialState = {
    page: 1,
    totalPages: 10
}

function pages (state = pagesInitialState, action) {
    switch(action.type) {
        case CHANGE_PAGE:{
            if(
                action.payload === state.page 
                || action.payload <= 0 
                || action.payload > state.totalPages
            ) return {...state};
            return { ...state, page: action.payload }
        }

        case CHANGE_TOTAL_PAGES: {
            return { totalPages: action.payload, page: 1}
        }

        default: return state;
    }
}

export {
    pagesInitialState,
    pages
}