// import React from 'react'
import React, { useState } from 'react';
import "../EV.css";

export const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // };

    // let array = useState();
    // console.log(array);
    const [count, setCount] = useState(0);
    // console.log(count)
    // count++; //never update this type
    const handleButtonClick = () => {
        setCount(() => count + 1)
    };
  return (
    <>
    <section className="main-div">
    
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>

    </section>
    </>
  );
};
