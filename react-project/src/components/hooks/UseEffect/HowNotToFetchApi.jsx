import React, { useEffect, useState } from 'react'
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
    // ye ek external api ka data h
    .then((res) => res.json())
    .then((data) =>{ 
        setApiData(data);
    })
    .catch((error) => console.log(error));

    }, [])
    // ye array dependency onaborth or ye ek baar hi chalta h

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // // ye ek external api ka data h
    // .then((res) => res.json())
    // .then((data) =>{ 
    //     // setApiData(data);
    // })
    // .catch((error) => console.log(error));

  return (
    <div className='container effect-container'>
        <ul>data:
            {
                apiData.map((curData) => {
                    return (
                        <li key={curData.id}> {curData.title} </li>
                    )
                })
            }
        </ul>
    </div>
  );
};
