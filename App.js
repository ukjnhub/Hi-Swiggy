import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"

// );

//jsx react -html like syntax
const heading = (<h1 id="heading"> Hello India I'm alive</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
