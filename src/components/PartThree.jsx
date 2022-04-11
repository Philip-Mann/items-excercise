import { useState } from "react";

const PartThree = ({ items }) => {
    
    const [expandView, setExpandView] = useState(false);

    const showFiveOrMore = (arr) => {

        // filter through items & return any items ordered 5 or more times
        const filteredItems = arr.filter((item) => {
            
            // for adding the amount ordered by customer 7
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
        setExpandView(!expandView);
    }

    return (
        <div className="items-container">
            <h2
                onClick={handleClick}
            >3) Show only the items have combined order amounts of 5 or more from customer ID 7</h2>
            {
                !expandView ? '' : 
                <pre>
                    <code>
                        {`
                            const showFiveOrMore = (arr) => {

                                // filter through items & return any items ordered 5 or more times
                                const filteredItems = arr.filter((item) => {
                                    
                                    // for adding the amount ordered by customer 7
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
                        `}
                    </code>
                </pre>
            }
        </div>
    )
}

export default PartThree;