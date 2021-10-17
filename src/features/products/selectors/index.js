export const selectProducts = (state) => state.products;

export const selectProductsInCart = (state) => state.products.filter(product => product.inCartQuantity > 0);