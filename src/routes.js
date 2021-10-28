import CartPage from './pages/cart-page';
import Home from './pages/home';
import NotFound from './pages/not-found';
import ProductsPage from './pages/products-page';
import WishlistPage from './pages/wishlist-page';

const HOME = '/';
const ELECTRONICS = '/electronics';
const CART = '/cart';
const WISHLIST = '/wishlist';
const NOT_FOUND = '/not-found';

const routes = [
    {
        path: HOME,
        exact: true,
        component: Home
    },
    {
        path: ELECTRONICS,
        exact: true,
        component: ProductsPage
    },
    {
        path: CART,
        exact: true,
        component: CartPage
    },
    {
        path: WISHLIST,
        exact: true,
        component: WishlistPage
    },
    {
        path: NOT_FOUND,
        exact: true,
        component: NotFound
    }
];

export {
    routes,
    HOME,
    ELECTRONICS,
    CART,
    WISHLIST,
    NOT_FOUND
}