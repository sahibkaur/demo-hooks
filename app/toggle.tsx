import {useState} from "react";
import './css/toggle.css';

export default function Toggle() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count+1);
    }

    function decrementCount() {
        setCount(count-1);
    }
    

    return (
        <div className="toggle-block">
            <span>How many candies do you want?</span>
            <button className="minusButton" onClick={decrementCount}>-</button>
            <span className="count-number">{count}</span>
            <button className="plusButton" onClick={incrementCount}>+</button>
        </div>
    )
}
