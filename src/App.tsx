import React from "react";
import ExamplePNG from "./assets/images/webpack-sprite.png";
import ExampleJPEG from "./assets/images/reactjs.jpeg";
import ExampleSVG from "./assets/svg/house-solid.svg";
import "./App.css";

export function App() {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Click me</button>
      <ExampleSVG fill="pink" className="example-svg-class" />
      <img src={ExamplePNG} alt="Example PNG" />
      <img src={ExampleJPEG} alt="Example JPEG" />
      <div className="background-image" />
    </React.Fragment>
  );
}
