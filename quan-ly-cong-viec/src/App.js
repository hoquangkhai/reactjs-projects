import React, { useEffect, useState } from "react";
import "./App.scss";
import Search from "./components/Control/Search";
import Sort from "./components/Control/Sort";
import TaskForm from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";

const onGenerateData = () => {
  let tasks = [
    {
      id: generateID(),
      name: "Hoc Lap Trinh",
      status: true,
    },
    {
      id: generateID(),
      name: "DI choi",
      status: false,
    },
    {
      id: generateID(),
      name: "Di nhau",
      status: true,
    },
  ];
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return tasks;
};

/** start function de random id */
const S4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}; //random 1 chuoi

const generateID = () => {
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4()
  );
};
/** end function de random id */

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);

  useEffect(() => {
    let tasks;
    if (localStorage && localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
    return tasks;
  }, []);
  return (
    <div className="app">
      <h1 className="app-heading">Quản lý công việc</h1>
      <div className="app-body">
        <div className="container-left">
          {isDisplayForm ? <TaskForm /> : ""}
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
            <Tasks tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
