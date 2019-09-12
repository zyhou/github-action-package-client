import React from "react";
import SayHello from "@zyhou/github-action-package-demo";

import logo from "./logo.svg";
import "./App.css";

SayHello();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, look in console</p>
        <a
          className="App-link"
          href="https://github.com/zyhou/github-action-package-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          @zyhou/github-action-package-demo
        </a>
      </header>
    </div>
  );
}

export default App;
