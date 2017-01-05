import { connect } from 'react-redux';
import { selectors } from 'reducers';
import { actions } from 'actions';

import Price from './Price';

class Cart extends React.Component {
    render() {
        const { clear, total } = this.props;
        return (
            <div>
                Total value of your cart: <Price value={total} />
                <button onClick={() => clear()}>Clear cart</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    total: selectors.getCartTotal(state)
});

export default connect(mapStateToProps, {
    clear: actions.clearCart
})(Cart);