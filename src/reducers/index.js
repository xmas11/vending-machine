import { combineReducers } from 'redux';
import cart, { selectors as cartSelectors } from './cart';
import store, { selectors as storeSelectors } from './store';

const transformSelectorsForPath = (path, selectors) => {
    const result = {};
    for (let selectorName in selectors) {
        result[selectorName] = (state, ...args) => selectors[selectorName](state[path], ...args);
    }
    return result;
};

const getCart = state => cartSelectors.getIdsInCart(state.cart)
    .map(id => ({
        item: storeSelectors.getItem(state.store, id),
        count: cartSelectors .getIdCountInCart(state.cart, id)
    }));

export const selectors = {
    ...transformSelectorsForPath('cart', cartSelectors),
    ...transformSelectorsForPath('store', storeSelectors),
    getCart,
    getCartTotal: state => getCart(state)
        .map(({ item, count }) => item.price * count)
        .reduce((a, b) => a + b, 0)
};

export default combineReducers({
    cart,
    store
});
