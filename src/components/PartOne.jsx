import React from "react";

const PartOne = ({ items }) => {

    const sortItemsBySellDate = (arr) => {
        const item = arr.map(item => { return item });
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
    }


    return (
        <div className="items-container">
            <h2
                onClick={handleClick}
            >1) Sort the items alphabetically by name.</h2>
        </div>
    )
}

export default PartOne;