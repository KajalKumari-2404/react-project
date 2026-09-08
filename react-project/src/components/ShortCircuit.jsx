import { useState } from "react";
import "./hooks/Hooks.css";

const ShortCircuitExample = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(true);
    const[user, setUser] = useState("")
    return (
        <section className="container short-container">

            <h1>Welcome to the Short Circuit Evaluation!</h1>

            {/* Conditional rendering using short circuit evaluation */}
            {isLoggedIn && <p>You are logged in!</p>}

            {/* Another example of short circuit evaluation */}
            {user ? `Hello ${user}` : "please logged in!"}

            <div className="grid-three-cols">

                <button onClick={ () => setIsLoggedIn(!isLoggedIn)}>
                    Toggle Login State
                    </button>

                <button onClick={() => setUser("kajal kumari")}>Set User</button>

                <button onClick={() => setUser("")}>Clear User</button>

            </div>

        </section>
    );
};

export default ShortCircuitExample;