import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

function Heading() {
  return <h1>My Favourite Apps- </h1>;
}

const myElement = (
  <div>
    <Heading />
    <ol>
      <li>Inshorts</li>
      <li>Groww</li>
      <li>Zerodhar</li>
      <li>Spotify</li>
    </ol>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(myElement);
