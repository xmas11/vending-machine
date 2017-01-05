import { createAction } from 'redux-actions';

export const types = {
    addItemToCart: 'ADD_ITEM_TO_CART',
    clearCart: 'CLEAR_CART'
};

export const actions = {
    addItemToCart: createAction(
        types.addItemToCart,
        itemId => itemId,
        (itemId, quantity = 1) => ({ quantity })
    ),
    clearCart: createAction(types.clearCart)
};
