import { useState } from "react";

const PartFour = ({ items }) => {

    const [expandView, setExpandView] = useState(false);

    const showCustomerIdOf5 = (arr) => {

        // iterating through items
        const filteredItems = arr.map((item) => {
            // filtering item.orderHistory
            const ordersByCustomer5 = item.orderHistory.filter((order) => {
                // returning only customer 5
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
        setExpandView(!expandView);
    }

    return (
        <div className="items-contatiner">
            <h2
                onClick={handleClick}
            >4) Return an array of all orders made by customerId 5.</h2>
            {
                !expandView ? '' : 
                <pre>
                    <code>
                        {`
                            const showCustomerIdOf5 = (arr) => {

                                // iterating through items
                                const filteredItems = arr.map((item) => {
                                    // filtering item.orderHistory
                                    const ordersByCustomer5 = item.orderHistory.filter((order) => {
                                        // returning only customer 5
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
                        `}
                    </code>
                </pre>
            }
        </div>
    )
}

export default PartFour;