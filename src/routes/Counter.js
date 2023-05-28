import React from "react";
import { useState } from "react";

function Counter(props) {
    const [value, setValue] = useState(0);

    const onPlus = () => setValue((prev) => prev + 1);
    const onMinus = () => setValue((prev) => prev - 1);

    return (
        <div>
            <h2 data-testid="title">카운터</h2>
            <p data-testid="value">{value}</p>
            <button data-testid="minus-btn" onClick={onMinus}>
                -
            </button>
            <button data-testid="plus-btn" onClick={onPlus}>
                +
            </button>
        </div>
    );
}

export default Counter;
