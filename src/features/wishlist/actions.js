const CHANGE_WISHLIST_STATUS = 'CHANGE_WISHLIST_STATUS';
const RESET_ALL_WISHLIST_STATUSES = 'RESET_ALL_WISHLIST_STATUSES';

function changeWishlistStatus (payload) {
    return {
        type: 'CHANGE_WISHLIST_STATUS',
        payload
    };
};

function resetAllWishlistStatuses () {
    return {
        type: 'RESET_ALL_WISHLIST_STATUSES'
    }
}

export {
    CHANGE_WISHLIST_STATUS,
    RESET_ALL_WISHLIST_STATUSES,
    changeWishlistStatus,
    resetAllWishlistStatuses,
}