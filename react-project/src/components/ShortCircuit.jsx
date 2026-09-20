import { useState } from "react";
import "./hooks/Hooks.css";

const ShortCircuitExample = () => { // ye componenet h
    const[isLoggedIn, setIsLoggedIn] = useState(true);
    const[user, setUser] = useState("");
    // const[count, setCount] = useState(0);

//    if (user) {
//        const[count, setCount] = useState(0);
//     // setCount(count + 1);
//    }
   ``;

//    const getData = () => {
//         const[data, setData] = useState(0); //ye js function h
//    }


//    getData();

    return (
        <section className="container short-container">

            <h1>Welcome to the Short Circuit Evaluation!</h1>

            {/* Conditional rendering using short circuit evaluation */}
            {/* {isLoggedIn && <p>You are logged in!</p>} */}
            {isLoggedIn && <p className="text-green-500 font-semibold">You are logged in!</p>}

            {/* Another example of short circuit evaluation */}
            {/* {user ? `Hello ${user}` : "please logged in!"} */}
            <p className="mt-4 text-lg">
                {user ? `Hello ${user}` : "Please login first!"}
                </p>

            <div className="grid-three-cols">

                {/* <button onClick={ () => setIsLoggedIn(!isLoggedIn)}> */}
                <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Toggle Login State
                    </button>

                <button onClick={() => setUser("kajal kumari")}>Set User</button>

                <button onClick={() => setUser("")}>Clear User</button>

            </div>

        </section>
    );
};

export default ShortCircuitExample;