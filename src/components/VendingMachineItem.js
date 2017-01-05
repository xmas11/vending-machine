import Price from './Price';

export default ({ price, onClick, children }) =>
<div className="vending-machine-item" onClick={onClick}>
    <div className="vending-machine-item__image-container">
        {children}
    </div>
    <div className="vending-machine-item__price">
        <Price value={price} />
    </div>
</div>;
