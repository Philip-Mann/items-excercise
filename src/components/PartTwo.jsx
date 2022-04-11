import { useState } from "react";

const PartTwo = ({ items }) => {

    const [expandView, setExpandView] = useState(false);

    const showFiveOrMore = (arr) => {

        // I am filtering through items to return any items ordered 5 or more times
        const filteredItems = arr.filter((item) => {

            // for adding the amount ordered forEach item
            let counter = 0;
            item.orderHistory.forEach((order) => {
                counter = counter + order.amount;
            });
            // filter returns a boolean value
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
        setExpandView(!expandView);
    }

    return (
        <div className="items-container">
            <h2
                onClick={handleClick}
            >2) Show only the items that have combined order amounts of 5 or more.</h2>
            {
                !expandView ? '' : 
                <pre>
                    <code>
                        {`
                            const showFiveOrMore = (arr) => {

                                // filter through items & return any items ordered 5 or more times
                                const filteredItems = arr.filter((item) => {
                        
                                    // for adding the amount ordered forEach item
                                    let counter = 0;
                                    item.orderHistory.forEach((order) => {
                                        counter = counter + order.amount;
                                    });
                                    // filter returns a boolean value
                                    if(counter < 5) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                console.log('Part Two Answers', filteredItems);
                            }
                        `}
                    </code>
                </pre>
            }
        </div>
    )
}

export default PartTwo;