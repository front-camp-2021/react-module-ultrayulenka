import { 
    CHANGE_WISHLIST_STATUS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_QUANTITY 
} from '../actions';

const productsInitialState = [
    {
        "id": "76w0hz7015kkr9kjkav",
        "images": [
          "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
        ],
        "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
        "rating": 2.89,
        "price": 15999,
        "category": "laptops",
        "brand": "acer",
        "inWishlist": false,
        "inCartQuantity": 0
    },
    {
        "id": "qeagrlm9lrkr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
          "https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black",
        "rating": 1.96,
        "price": 21500,
        "category": "laptops",
        "brand": "acer",
        "inWishlist": false,
        "inCartQuantity": 0
    },
    {
        "id": "0y9ksratv6akr9kjkav",
        "images": [
          "https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg",
          "https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
        "rating": 2.42,
        "price": 22999,
        "category": "laptops",
        "brand": "acer",
        "inWishlist": false,
        "inCartQuantity": 0
    },
    {
        "id": "cvr29caokhhkr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/25101152.jpg",
          "https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg"
        ],
        "title": "Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!",
        "rating": 0.53,
        "price": 28999,
        "category": "laptops",
        "brand": "acer",
        "inWishlist": false,
        "inCartQuantity": 0
    },
    {
        "id": "k9hb29sfeekr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black",
        "rating": 3.2,
        "price": 22500,
        "category": "laptops",
        "brand": "acer",
        "inWishlist": false,
        "inCartQuantity": 0
    }
];

function products (state = productsInitialState, action) {
    switch(action.type) {
        case CHANGE_WISHLIST_STATUS: {
            return state.map(product => {
                if(product.id === action.payload) {
                    return {
                        ...product,
                        inWishlist: !product.inWishlist
                    };
                } 

                return product;
            });
        }

        case ADD_TO_CART: {
            return state.map(product => {
                if(product.id === action.payload) {
                    alert(`${product.title} added to the cart`);
                    return {
                        ...product,
                        inCartQuantity: product.inCartQuantity + 1
                    };
                }

                return product;
            });
        }

        case REMOVE_FROM_CART: {
            return state.map(product => {
                if(product.id === action.payload) {
                    return {
                        ...product,
                        inCartQuantity: 0
                    };
                }

                return product;
            });
        }

        case CHANGE_QUANTITY: {
            const { quantity, id } = action.payload;

            return state.map(product => {
                if(product.id === id) {
                    return {
                        ...product,
                        inCartQuantity: quantity
                    };
                }

                return product;
            });
        }

        default: return state;
    }
}

export {
    productsInitialState,
    products
}