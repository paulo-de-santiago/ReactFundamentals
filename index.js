// @ts-nocheck
//React is a blueprint, knows how to describe an user interface but doesn't know how to render it
import React from "react";

//ReactDOM uses the blueprint to build, is the target platform, it can render into the browser
import ReactDOM from "react-dom";

const domElement = document.getElementById("root");

// It's JSX, reactElement compiles like JavScript
const reactElement = <div className="fish">Hello</div>;
// What happens under the hood, it's just JavaScript under the hood
const text = "Hello";
const reactElementS = React.createElement(
  "div",
  /* null */ { className: "fish" },
  text
);

const reactElementButton = <button>{text}</button>; // return of a react Element

const Button = ({ children }) => <button>{children}</button>; // return of a react Component by turning it into a function

//ReactDOM will render both consts

ReactDOM.render(reactElement, domElement);

ReactDOM.render(reactElementButton, domElement);

ReactDOM.render(
  <div>
    <Button text="Add"> + Add</Button>
    {/* Rendering by position  with children props*/}
    <Button text="Subtract" />
    {/* <Button /> */}
  </div>,
  domElement
);

// Children is a prop, one can pass it by position:

<Button text="Add"> + Add</Button>;
{
  /* Rendering by position  with children props*/
}

//Or passing it like prop by value
//1)
<Button children={element}/> 
//2) By value under the hood
React.createElement(Button, {children: element})


//Passing props by position
<Button > {element} </Button>
//2) By position under the hood
React.createElement(Button, {}, element)
//3
React.createElement(Button, {children: element})
