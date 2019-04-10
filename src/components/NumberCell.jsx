import React from 'react';

const NumberCell = (props) => {
    // Format the number
    const number = +props.value.toFixed(2)
    return <span className="NumberCell">{number}</span>;
}

export default NumberCell;
