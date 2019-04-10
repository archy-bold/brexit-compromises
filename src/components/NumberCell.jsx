import React from 'react';

const NumberCell = (props) => {
    // Format the number
    let number = props.value;
    if (!isNaN(number)) {
        number = +number.toFixed(2)
    }
    return <span className="NumberCell">{number}</span>;
}

export default NumberCell;
