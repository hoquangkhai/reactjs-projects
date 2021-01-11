import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import appReducers from "./reducers/index";

import App from "./App";
import { Provider } from "react-redux";

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
