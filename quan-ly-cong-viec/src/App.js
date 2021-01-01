import React from "react";
import "./App.scss";
import Search from "./components/Control/Search";
import Sort from "./components/Control/Sort";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">Quản lý công việc</h1>
      <div className="app-body">
        <div className="container-left">
          <TaskForm />
        </div>

        <div className="container-right">
          <div className="container-right-heading">
            <button className="btn btn-right">Thêm Công Việc</button>
          </div>

          <div className="container-right-body">
            <Search />
            <Sort />
          </div>

          <div className="container-right-footer">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
