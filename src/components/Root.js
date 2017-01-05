import createLogger from 'redux-logger';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'reducers';
import { actions } from 'actions';

import VendingMachine from './VendingMachine';
import Cart from './Cart';

const logger = createLogger({ collapsed: true });
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

[
    { id: 1, price: 12.99, component: <i className="fa fa-umbrella fa--big" /> },
    { id: 2, price: 24.99, component: <i className="fa fa-clock-o fa--big" /> },
    { id: 3, price: 74.99, component: <i className="fa fa-headphones fa--big" /> },
    { id: 4, price: 5.99, component: <i className="fa fa-life-buoy fa--big" /> },
    { id: 5, price: 799.99, component: <i className="fa fa-motorcycle fa--big" /> }
].map(compose(store.dispatch, actions.addItemToStore));

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>Vending machine</h1>
                    <div>
                        <VendingMachine />
                        <Cart />
                    </div>
                </div>
            </Provider>
        );
    }
}