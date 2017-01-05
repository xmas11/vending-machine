export default ({ value }) => {
    const [major, cents] = (value.toFixed(2) + '').split('.');
    return <p>${major}.<small>{cents}</small></p>;
};