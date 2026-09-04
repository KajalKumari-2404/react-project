import "./EV.css";

import React from 'react'

export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert("Hey I am onClick Event");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type); //click
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    };

  return (
    <>
    {/* // ? function components with named functions */}
    {/* Remember how we haven't called this function, if you call this function here then it will run without 
    even clicking. you just need to pass reference and not call here.  */}

    <button onClick={handleButtonClick}>Click Me</button> 
     {/* isme agar call add karenge to without click kiye hi output aa jayega */}
    <br />
    <button onClick={ (event) => handleButtonClick(event)}>Click Me 2</button>
     {/* ye inline function h */}
     <br />
     <button onClick={ (event) => console.log(event)}>Inline Function</button>
     {/* // ? Inline Event Handlers} */}
     <br />
     <button onClick={ () => alert("Hey I am inline event function")}>Inline Arrow Function</button>
     {/* // ? function components with Inline Arrow Function  */}
     {/* <button onClick={handleWelcomeUser("kajal")}>Click Me</button> //aise call karne pw without button click kiye output aa jayega */}
     {/* // ? passing arguments to Event Handlers */}

     <button onClick={() => handleWelcomeUser("kajal")}>Click Me</button>
     <button onClick={() => handleWelcomeUser("kangana")}>Click Me</button>


     
     </>
  );
};
