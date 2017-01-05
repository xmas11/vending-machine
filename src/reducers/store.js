import { handleActions } from 'redux-actions';
import { types } from 'actions';

export const getInitialState = () => ({
    idToItem: {}
});

export const selectors = {
    getItemsInStore: state => Object.values(state.idToItem),
    getItem: (state, id) => state.idToItem[id]
};

export default handleActions({
    [types.addItemToStore]: (state, { payload }) => ({
        ...state,
        idToItem: {
            ...state.idToItem,
            [payload.id]: payload
        }
    })
}, getInitialState());
