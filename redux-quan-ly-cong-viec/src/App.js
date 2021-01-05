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

function App() {
  const [isDisplayForm, setIsDisplayForm] = useState(true);
  const [taskEditing, setTaskEditing] = useState();
  const [filter, setFilter] = useState({
    name: "",
    status: -1,
  });
  const [keyword, setKeyword] = useState();
  const [sort, setSort] = useState({
    sortName: "",
    status: 0,
  });

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

  //tim Index cua task can thay doi Status trong tasks
  const findIndex = (id) => {
    // let result = -1;
    // tasks.forEach((task, index) => {
    //   if (task.id === id) {
    //     result = index;
    //   }
    // });
    // return result;
  };

  const onUpdateStatus = (id) => {
    // let index = findIndex(id);
    // if (index !== -1) {
    //   tasks[index].status = !tasks[index].status;
    //   setTasks([...tasks]);
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // }
  };

  const onDelete = (id) => {
    // let index = findIndex(id);
    // if (index !== -1) {
    //   tasks.splice(index, 1);
    //   setTasks([...tasks]);
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // }
    // onCloseForm();
  };

  const onUpdate = (id) => {
    // let index = findIndex(id);
    // var taskEdit = tasks[index];
    // setTaskEditing({
    //   ...taskEditing,
    //   ...taskEdit,
    // });
    // onShowForm();
  };

  const onFilter = (filterValue) => {
    filterValue.status = parseInt(filterValue.status, 10);
    setFilter({
      ...filter,
      ...filterValue,
    });
  };

  const onSearch = (searchValue) => {
    setKeyword({
      ...keyword,
      ...searchValue,
    });
  };

  const onSort = (sortValue) => {
    sortValue.status = parseInt(sortValue.status, 10);
    setSort({
      ...sort,
      ...sortValue,
    });
  };
  //  Xử lý logic vs JS //
  //vong lap khi filter
  // let tasksList = [...tasks];nho rieng

  if (filter) {
    // if (filter.name) {
    //   tasksList = tasksList.filter((task) => {
    //     return (
    //       task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
    //     );
    //   });
    // }
    // tasksList = tasksList.filter((task) => {
    //   if (filter.status === -1) {
    //     return task;
    //   } else {
    //     return task.status === (filter.status === 1 ? true : false);
    //   }
    // });
  }

  if (keyword) {
    // if (keyword.keyword) {
    //   tasksList = tasksList.filter((task) => {
    //     return (
    //       task.name.toLowerCase().indexOf(keyword.keyword.toLowerCase()) !== -1
    //     );
    //   });
    // }
  }

  if (sort) {
    // if (sort.sortName) {
    //   // console.log(sort);
    //   tasksList.sort((a, b) => {
    //     if (sort.status === 0) return a.name > b.name ? 1 : -1;
    //     if (sort.status === 1) return a.name > b.name ? -1 : 1;
    //     if (sort.status === 2) return a.status > b.status ? -1 : 1;
    //     if (sort.status === 3) return a.status > b.status ? 1 : -1;
    //   });
    // }
  }
  //function End

  return (
    <div className="app">
      <h1 className="app-heading">Quản lý công việc</h1>
      <div className="app-body">
        <div className="container-left">
          {isDisplayForm ? (
            <TaskForm onCloseForm={onCloseForm} task={taskEditing} />
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
            <Search onSearch={onSearch} />
            <Sort onSort={onSort} />
          </div>

          <div className="container-right-footer">
            <TaskList
              onFilter={onFilter}
              // tasks={tasksList}
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
