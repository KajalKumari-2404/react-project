import React from 'react'

import "./EV.css";

export const EventProps = () => {


    // parent component
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = () => {
        alert(`Hey Thanks for hovering me`);
    };


  return (
    <div className="events-handling">
    {/* //child component */}
    <WelcomeUser 
    onButtonClick={() => HandleWelcomeUser("kajal")} 
    onMouseEnter={handleHover} />
    </div>
  );
};

const WelcomeUser = (props) => {
    const { onButtonClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        onButtonClick();
    };
    return (
        <>
        <button className="click-btn" onClick={onButtonClick}>Click</button>
        <button className="hover-btn" onMouseEnter={onMouseEnter}>Hover Me</button>
        <button className="greeting-btn" onClick={handleGreeting}>Greeting</button>
        </>
    );
};
