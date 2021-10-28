import { 
    CHANGE_WISHLIST_STATUS,
    RESET_ALL_WISHLIST_STATUSES,
} from './actions';

const wishlistInitialState = [];

function wishlist (state = wishlistInitialState, action) {
    switch(action.type) {
        case CHANGE_WISHLIST_STATUS: {
            const {id } = action.payload;
            const index = state.findIndex(item => item.id === id);

            if(index >= 0) {
                return [...state.slice(0, index), ...state.slice(index+1)]
            }

            return [...state, action.payload];
        }

        case RESET_ALL_WISHLIST_STATUSES: {
            return [];
        }

        default: return state;
    }
}

export {
    wishlistInitialState,
    wishlist
}