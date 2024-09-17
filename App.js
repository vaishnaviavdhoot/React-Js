const parent = React.createElement("div",{id:"parent"},
               [React.createElement("div",{id:"child 1"},
               [React.createElement("h1",{id:"heading"},"Hi its a parent child hierarchy 1"),
                React.createElement("h2",{id:"heading"},"Hi its a parent child hierarchy 2")
               ]
            ),
            React.createElement("div",{id:"child 2"},
                [React.createElement("h1",{id:"heading"},"Hi its a parent child hierarchy 1"),
                 React.createElement("h2",{id:"heading"},"Hi its a parent child hierarchy 2")
                ]
             )]);

// const heading = React.createElement("h1",{id:"heading",xyz:"abc "},"Hello React !");
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(parent)