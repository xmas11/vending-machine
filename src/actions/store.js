import { createAction } from 'redux-actions';

export const types = {
    addItemToStore: 'ADD_ITEM_TO_STORE'
};

export const actions = {
    addItemToStore: createAction(
        types.addItemToStore
    )
};