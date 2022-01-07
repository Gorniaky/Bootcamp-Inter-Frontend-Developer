import productList from './product';

const INITIAL_STATE = {
    value: 0,
    products: productList,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action) {
    console.log(state)
    switch (action.type) {
        case 'ADD_TO_CART':
            if (!state.Cart?.length) {
                let item = {
                    id: action.product.id_product,
                    name: action.product.name_product,
                    price: action.product.price,
                    image: action.product.image,
                    quantity: 1
                }
                state.Cart.push(item);
                state.value = 0;
            } else {
                const check = state.Cart.some((item, key) => {
                    if (item.id !== action.product.id_product) return false;
                    state.Cart[key].quantity++;
                    return true
                });
                if (!check) {
                    let item = {
                        id: action.product.id_product,
                        name: action.product.name_product,
                        price: action.product.price,
                        image: action.product.image,
                        quantity: 1
                    }
                    state.Cart.push(item);
                }
            }
            return {
                ...state,
                value: (state.value + 1)
            }
        case 'ADD_ITEM':
            action.product.quantity++
            return {
                ...state,
                value: (action.cart.value + 1)
            }
        case 'REMOVE_ITEM':
            if (action.product.quantity > 1) {
                action.product.quantity--
                return {
                    ...state,
                    value: (action.cart.value - 1)
                }
            } else {
                return state;
            }
        case 'DELETE_ITEM':
            if (state.Cart?.length === 1)
                return {
                    ...state,
                    value: 1,
                    Cart: state.Cart.filter(item => item.id !== action.product.id),
                }
            return {
                ...state,
                value: action.cart.value - action.product.quantity,
                Cart: state.Cart.filter(item => item.id !== action.product.id),
            }
        case 'CHANGE_CART':
            return state = action.localCart
        case 'RESET':
            return {
                ...state,
                value: 1,
                Cart: [],
            }
        default:
            return state;
    }
}
