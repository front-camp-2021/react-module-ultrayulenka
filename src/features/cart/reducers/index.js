import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_QUANTITY
} from '../actions';

const cartInitialState = [];

function cart (state = cartInitialState, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            const { id } = action.payload;
            const index = state.findIndex(item => item.id === id);
            console.log(id);

            if(index >= 0) {
                const product = state[index];
                return [
                    ...state.slice(0, index), 
                    {...product, quantity: product.quantity + 1},
                    ...state.slice(index+1)
                ]
            }

            return [...state, {...action.payload, quantity: 1}];
        }

        case REMOVE_FROM_CART: {
            const index = state.findIndex(item => item.id === action.payload);

            if(index >= 0) {
                return [...state.slice(0, index), ...state.slice(index+1)]
            }
            return state;
        }

        case CHANGE_QUANTITY: {
            const { id, quantity } = action.payload;
            const index = state.findIndex(item => item.id === id);

            if(index >= 0) {
                const product = state[index];
                return [
                    ...state.slice(0, index), 
                    {...product, quantity },
                    ...state.slice(index+1)
                ]
            }
            return state;
        }

        default: return state;
    }
}

export {
    cartInitialState,
    cart
}