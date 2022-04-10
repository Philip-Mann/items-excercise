const PartFour = ({ items }) => {

    const showCustomerIdOf5 = (arr) => {
        const filteredItems = arr.map((item) => {
            const ordersByCustomer5 = item.orderHistory.filter((order) => {
                if(order.customerId === 5) {
                    return true;
                } else {
                    return false;
                }
            });
            return ordersByCustomer5;
        });
        console.log('Part Four Answers:', filteredItems);
    }

    const handleClick = () => {
        showCustomerIdOf5(items);
    }

    return (
        <h2
            onClick={handleClick}
        >4) Return an array of all orders made by customerId 5.</h2>
    )
}

export default PartFour;