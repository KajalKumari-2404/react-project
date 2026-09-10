import React, { useEffect, useState } from 'react'
import "./index.css";

export const ReactUseEffect = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         // console.log("Hello useEffect");
//         console.log("count value:", count);
//     }, [count])
//   return (
//     // <div>
//         // <h1 className='h11'>Hello, useEffect! </h1>
//     // </div>
//     <div className='container effect-container'>
//         <h1>useEffect <br /> Hook</h1>
//         <p className='count'>Count: {count}</p>
//         <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };


const [date, setDate] = useState(0);
    useEffect(() => {
        setInterval(() => {
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString());
        }, 1000);
        // const updatedDate = new Date();
        // setDate(updatedDate.toLocaleTimeString());
    }, []);
        // console.log("Hello useEffect");

  return (
    // <div>
        // <h1 className='h11'>Hello, useEffect! </h1>
    // </div>
    <div className='container effect-container'>
        <h1> Date : {date} </h1>
        {/* <p className='count'>Count: {count}</p> */}
        {/* <button className='btn' onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};
