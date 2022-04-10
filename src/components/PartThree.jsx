const PartThree = ({ items }) => {

    const showFiveOrMore = (arr) => {
        const filteredItems = arr.filter((item) => {
            
            let counter = 0;
            item.orderHistory.forEach((order) => {
                if (order.customerId === 7) {
                    counter = counter + order.amount;
                }
            });
            if(counter > 5) {
                return true;
            } else {
                return false;
            }
        });
        console.log('Part Three Answers:', filteredItems);
    }

    const handleClick = () => {
        showFiveOrMore(items);
    }

    return (
        <h2
            onClick={handleClick}
        >3) Show only the items have combined order amounts of 5 or more from customer ID 7</h2>
    )
}

export default PartThree;