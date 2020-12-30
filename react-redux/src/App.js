import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      <h1>hello lady</h1>
      <Header />
      <Products />
    </div>
  );
}

export default App;
