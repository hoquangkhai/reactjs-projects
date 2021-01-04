import React, { useEffect, useState } from "react";
import "./App.scss";
import Search from "./components/Control/Search";
import Sort from "./components/Control/Sort";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/Tasks/TaskList";

// const onGenerateData = () => {
//   let tasks = [
//     {
//       id: generateID(),
//       name: "Hoc Lap Trinh",
//       status: true,
//     },
//     {
//       id: generateID(),
//       name: "DI choi",
//       status: false,
//     },
//     {
//       id: generateID(),
//       name: "Di nhau",
//       status: true,
//     },
//   ];
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   return [];
// };

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
  const [isDisplayForm, setIsDisplayForm] = useState(true);
  const [taskEditing, setTaskEditing] = useState();

  useEffect(() => {
    // onGenerateData();
    let tasks;
    if (localStorage && localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
    setTasks(tasks);
  }, []);

  //function start

  const onToggleForm = () => {
    if (isDisplayForm && taskEditing !== undefined) {
      setIsDisplayForm(true);
      setTaskEditing();
    } else {
      setIsDisplayForm(!isDisplayForm);
      setTaskEditing();
    }
  };

  const onCloseForm = () => {
    setIsDisplayForm(false);
  };

  const onShowForm = () => {
    setIsDisplayForm(true);
  };

  const onSubmit = (data) => {
    let newTask;

    if (data.id === "") {
      newTask = {
        id: generateID(),
        name: data.name,
        status: data.status,
      };
      tasks.push(newTask);
    } else {
      //editing
      var index = findIndex(data.id);
      tasks[index] = data;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks([...tasks]);
    setTaskEditing();
  };

  //tim Index cua task can thay doi Status trong tasks
  const findIndex = (id) => {
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  const onUpdateStatus = (id) => {
    let index = findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      setTasks([...tasks]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  const onDelete = (id) => {
    let index = findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      setTasks([...tasks]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    onCloseForm();
  };

  const onUpdate = (id) => {
    let index = findIndex(id);
    var taskEdit = tasks[index];
    setTaskEditing({
      ...taskEditing,
      ...taskEdit,
    });
    onShowForm();
  };
  //function End
  return (
    <div className="app">
      <h1 className="app-heading">Quản lý công việc</h1>
      <div className="app-body">
        <div className="container-left">
          {isDisplayForm ? (
            <TaskForm
              onCloseForm={onCloseForm}
              onSubmit={onSubmit}
              task={taskEditing}
            />
          ) : (
            ""
          )}
        </div>

        <div className="container-right">
          <div className="container-right-heading">
            <button className="btn btn-right" onClick={onToggleForm}>
              Thêm Công Việc
            </button>
          </div>

          <div className="container-right-body">
            <Search />
            <Sort />
          </div>

          <div className="container-right-footer">
            <TaskList
              tasks={tasks}
              onUpdateStatus={onUpdateStatus}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
