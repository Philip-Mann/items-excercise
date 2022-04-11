import React, { useState } from "react";

const PartOne = ({ items }) => {

    const [expandView, setExpandView] = useState(false);

    const sortItemsBySellDate = (arr) => {
        // need to iterate through items
        const item = arr.map(item => { return item });
        // then sort alphabetically by name
        item.sort((a, b) => {
            if(a.name > b.name) {
                return 1
            } 
            if(a.name < b.name) {
                return -1
            }
            return 0
        });
        console.log('Part One Answers:', item);
    }

    const handleClick = () => {
        sortItemsBySellDate(items);
        setExpandView(!expandView);
    }


    return (
        <div className="items-container">
            <h2
                onClick={handleClick}
            >1) Sort the items alphabetically by name.</h2>
            {!expandView ? '' : 
                <pre>
                    <code>
                    {`
                        const sortItemsBySellDate = (arr) => {

                        // need to iterate through items
                        const item = arr.map(item => { return item });

                        // then sort alphabetically by name
                        item.sort((a, b) => {
                            if(a.name > b.name) {
                                return 1
                            }   
                            if(a.name < b.name) {
                                return -1
                            }
                          return 0
                        });
                    `}
                    </code>
                </pre>
            }
        </div>
    )
}

export default PartOne;