import { connect } from 'react-redux';
import { selectors } from 'reducers';
import { actions } from 'actions';

import VendingMachineItem from './VendingMachineItem';

class VendingMachine extends React.Component {
    render() {
        const { addItemToCart, items } = this.props;
        return (
            <div className="vending-machine">
                {
                    items.map(
                        ({ id, price, component }) =>
                            <VendingMachineItem
                                key={id}
                                onClick={() => addItemToCart(id)}
                                price={price}
                            >
                                {component}
                            </VendingMachineItem>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: selectors.getItemsInStore(state)
});
export default connect(mapStateToProps, {
    addItemToCart: actions.addItemToCart
})(VendingMachine);