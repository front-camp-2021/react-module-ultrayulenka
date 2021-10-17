export const selectProducts = (state) => state.products;

export const selectProductsInCart = (state) => state.products.filter(product => product.inCartQuantity > 0);

export const selectProductsInWishlist = (state) => state.products.filter(product => product.inWishlist);