import React from "react";
import ReactDOM from "react-dom/client";
// normal js code 
//     const heading = document.createElement('h1');
//    heading.innerHTML ='hello world from js';
//    const root = document.getElementById('root');
//    root.appendChild(heading);

//React code 
//   const heading = React.createElement('h1', { id:'heading', xyz:'abc'}, 'Hello World from react !');
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(heading)


// multiple div
{/* <div id="parent">
    <div id="child1">
        <h1>I am child 1</h1>
    </div>
      <div id="child2">
        <h1>I am child 2</h1>
    </div>
     <div id="child3">
        <h1>I am child 3</h1>
    </div>
</div> */}

// const parent = React.createElement('div', {id:'parent'},
//     [React.createElement('div', {id:'child1'},
//         [React.createElement('h1', {id:'h1'}, 'I am child 1'),React.createElement('h2', {id:'h2'}, 'I am child 1 !')]
//     ),React.createElement('div', {id:'child2'},
//         [React.createElement('h1', {id:'h2'}, 'I am child 2'),React.createElement('h2', {id:'h2'}, 'I am child 2')]
//     ),React.createElement('div', {id:'child3'},
//         [React.createElement('h1', {id:'h3'}, 'I am child 3'),React.createElement('h2', {id:'h2'}, 'I am child 3')]
//     )]
// )
// jsx - HTML -like or XML-like syntax
// JSX is not HTML, it is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. JSX produces React "elements". You can embed any JavaScript expression in JSX by wrapping it in curly braces {}.
// JSX is not required to use React, but it is recommended. JSX makes it easier to write and add HTML in React.
// JSX is transpiled to React.createElement() calls by Babel. This means that JSX is not valid JavaScript, and it needs to be transpiled to JavaScript before it can be run in the browser. Babel is a JavaScript compiler that converts JSX into regular JavaScript. Babel is included in the React library, so you don't need to install it separately.
//
const jsxHeading = <h1 id="heading" className="head" tabIndex="5" xyz="abc">Hello World from JSX</h1>
const element = <span>this is a span tag</span>
const Title = () => (
    <div>
        {element}
        <h1>Namaste React title from functional component</h1>
    </div>
)

const Title2 = (
    <div>
        <h1>Namaste React from normal object</h1>
    </div>
)
console.log(typeof Title3)
function Title3() {
    return (
        <div>
            <h1>Namaste React from normal function</h1>
        </div>
    )
}
const number = 1000;
// component composition
const JsxHeading1 =() => (
    <div id="parent">
        <h1>Namaste React functional component</h1>
        <h2> {number}</h2>
        <h2>{3000-500}</h2>
        <Title />
        <Title></Title>
        {Title()}
        {Title2}
        <Title3 />
        {console.log("Hello World from jsx code")}
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JsxHeading1/>);