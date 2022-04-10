const PartTwo = ({ items }) => {

    const showFiveOrMore = (arr) => {
        const filteredItems = arr.filter((item) => {
            let counter = 0;
            item.orderHistory.forEach((order) => {
                counter = counter + order.amount;
            });
            if(counter < 5) {
                return false;
            } else {
                return true;
            }
        });
        console.log('Part Two Answers', filteredItems);
    }
    

    const handleClick = () => {
        showFiveOrMore(items);
    }

    return (
        <h2
            onClick={handleClick}
        >2) Show only the items that have combined order amounts of 5 or more.</h2>
    )
}

export default PartTwo;