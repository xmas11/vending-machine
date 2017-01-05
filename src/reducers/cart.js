import { handleActions } from 'redux-actions';
import { types } from 'actions';

export const getInitialState = () => ({
    idToQuantity: {}
});

export const selectors = {
    getIdsInCart: state => Object.keys(state.idToQuantity),
    getIdCountInCart: (state, id) => state.idToQuantity[id] || 0
};

export default handleActions({
    [types.addItemToCart]: (state, { payload, meta: { quantity } }) => ({
        ...state,
        idToQuantity: {
            ...state.idToQuantity,
            [payload]: selectors.getIdCountInCart(state, payload) + quantity
        }
    }),
    [types.clearCart]: getInitialState
} , getInitialState());