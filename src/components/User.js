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
    <div className="mt-5">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold mb-4"> Counter </h1>
      </div>
      <div className="flex gap-10 justify-center">
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-1 bg-green-100 m-2 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-1 bg-green-100 m-2 rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-1 bg-green-100 m-2 rounded-lg"
          onClick={() => setCount2(count2 + 1)}
        >
          Increment Count2
        </button>
        <button
          className="px-4 py-1 bg-green-100 m-2 rounded-lg"
          onClick={() => setCount2(count2 - 1)}
        >
          Decrement Count2
        </button>
      </div>
      <div className="flex justify-center"></div>
      <div className="border border-solid border-black m-2 p-2">
        <h1 className="text-2xl font-bold mb-4"> Profile Details </h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    </div>
  );
};
