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

const parent = React.createElement('div', {id:'parent'},
    [React.createElement('div', {id:'child1'},
        [React.createElement('h1', {id:'h1'}, 'I am child 1'),React.createElement('h2', {id:'h2'}, 'I am child 1')]
    ),React.createElement('div', {id:'child2'},
        [React.createElement('h1', {id:'h2'}, 'I am child 2'),React.createElement('h2', {id:'h2'}, 'I am child 2')]
    ),React.createElement('div', {id:'child3'},
        [React.createElement('h1', {id:'h3'}, 'I am child 3'),React.createElement('h2', {id:'h2'}, 'I am child 3')]
    )]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)