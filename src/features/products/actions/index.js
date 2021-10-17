const CHANGE_WISHLIST_STATUS = 'CHANGE_WISHLIST_STATUS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

function addToCart (payload) {
    return {
        type: 'ADD_TO_CART',
        payload
    };
};

function removeFromCart (payload) {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    };
};

function changeQuantity (payload) {
    return {
        type: 'CHANGE_QUANTITY',
        payload
    }
}

function changeWishlistStatus(payload) {
    return {
        type: 'CHANGE_WISHLIST_STATUS',
        payload
    };
};

export {
    CHANGE_WISHLIST_STATUS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_QUANTITY,
    changeWishlistStatus,
    addToCart, 
    removeFromCart,
    changeQuantity
}