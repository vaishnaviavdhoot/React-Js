// import React from "react";
import { useState, useEffect } from "react";


export const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const { name, location, contact } = props;
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Count updated in user ");
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [count]);

  return (
    <div className="user-card">
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment Count2</button>
        <button onClick={() => setCount2(count2 - 1)}>Decrement Count2</button>
        
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
        </div>
    );  
}