import {useState} from "react";
import './css/count.css';

export default function Toggle() {
    const [candynumber, setCandynumber] = useState(0);

    function incrementCount() {
        setCandynumber(candynumber+1);
    }

    function decrementCount() {
        setCandynumber(candynumber-1);
    }
    

    return (
        <div className="count-block">
            <span>How many candies do you want?</span>
            <button className="minusButton" onClick={decrementCount}>-</button>
            <span className="count-number">{candynumber}</span>
            <button className="plusButton" onClick={incrementCount}>+</button>
        </div>
    )
}
