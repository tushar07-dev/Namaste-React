// created an element using React
// ------------------------------------------------------------------------------
//                 SINGLE CHILDREN
// ------------------------------------------------------------------------------

const heading = React.createElement(
    "h1",
{
    id: "heading",
    xyz: "abc",
},
    "Hello World from React!"
    );
    // console.log(heading); 
     //It returns object. it is not H1 tag we see in HTML
// but to Add that element to our browser or DOm, We need ReactDom library
// Acess Browser using ReactDOM. 
// Now show React element to Browser using ReactDom

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ------------------------------------------------------------------------------
//                 NESTED CHILDREN- By passing 3rd argument as childred
// ------------------------------------------------------------------------------


const parent = React.createElement(
    "div",
    { id: "prent"},
    React.createElement("div", { id: "child"},
    React.createElement("h1", {}, "I`m an H1 tag")
    )
);

// console.log(parent); 
//object (React element)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ------------------------------------------------------------------------------
//                 NESTED Sibalings CHILDREN- By passing 3rd argument as childred
// ------------------------------------------------------------------------------
// to pass multiple childs inside child thenuse array [].

const parent2 = React.createElement(
    "div",
    { id: "prent2"},
    [
        
    React.createElement("div", { id: "child"}, [
        React.createElement("h1", { id: "child1"}, "I`m an H1 tag"),
        React.createElement("h2", { id: "child2"}, "I`m an H2 tag"),
        React.createElement("h3", { id: "child3"}, "I`m an H3 tag"),
    ]),
    
    React.createElement("div", { id: "child"}, [
        React.createElement("h1", { id: "child1"}, "I`m an H1 tag"),
        React.createElement("h2", { id: "child2"}, "I`m an H2 tag"),
        React.createElement("h3", { id: "child3"}, "I`m an H3 tag"),
    ])
    ]
);
// complicated, untidie 
// console.log(parent2); //object (React element)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);

// 

console.log("render", root.render);