export const selectProductsInWishlist = (state) => state.wishlist;

export const selectProductsInWishlistIds = (state) => state.wishlist.map(product => product.id);