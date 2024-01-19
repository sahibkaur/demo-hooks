import {useState, useEffect, useMemo} from "react";
import './css/theme.css';


export default function Theme() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber =  useMemo(() => {
        return slowFunction(number);
    },[number]);
    const themeStyles ={
        backgroundColor: dark ? '#2D2D2A' : '#E5DCC5',
        color: dark ? 'white': '#2D2D2A'
    };

    useEffect(() =>  useMemo( () =>  {
        console.log("Theme changed");
    }, [themeStyles])
    , [dark]);

    function slowFunction(num: any) {
        console.log("Calling Slow Function");
        for(let i=0; i <= 1000000000; i++){ }
        return num*2;
    }


    return (
        <div className="theme">
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/> 
            <button onClick={() =>setDark(prevDark => !prevDark)}>Change Theme</button>
            <div className="apply-theme" style={themeStyles}>{doubleNumber}</div>   
        </div>
    );

}
