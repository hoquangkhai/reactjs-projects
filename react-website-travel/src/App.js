import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./rousts";
import Header from "./components/Header";
import "./App.css";

//function
const showContentMenus = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return result;
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        {/**Content */}
        <Switch>{showContentMenus(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
