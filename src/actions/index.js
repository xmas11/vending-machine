import {
    actions as cartActions,
    types as cartTypes
} from './cart';

import {
    actions as storeActions,
    types as storeTypes
} from './store';

export const actions = {
    ...cartActions,
    ...storeActions
};

export const types = {
    ...cartTypes,
    ...storeTypes
};
