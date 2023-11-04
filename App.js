import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"

// );

const number= 100;

const Title= () => {
    return <h1>I'm a Title</h1>
}
//React Functional Component:
const HeadingComponent= ()=>(
   <>
     {/* <Title /> */}
     {Title()}
     {number}
     <h1 className="heading"> Namaste React Walo</h1>
   </> 
);

//jsx react -html like syntax
// const heading = (<h1 id="heading"> Hello India I'm alive</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
