import { useState } from 'react';
import '../Hooks.css';

export const Counter = () => {
    // console.log(useState(5));

    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
        console.log("inner", count);
    };
    console.log("outer", count);


    return (
        <div className="container state-container " style={{
            textAlign: "center" }}>
                <h1>useState Hook !</h1>
                <br />
                <p>{count}</p>
                <button className='state-btn' onClick={handleIncrement}>Increment</button>
            </div>
    );
};