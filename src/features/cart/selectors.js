export const selectProductsInCart = (state) => state.cart;

export const selectProductsInCartIds = (state) => state.cart.map(product => product.id);