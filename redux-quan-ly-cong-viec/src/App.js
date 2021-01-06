import React from "react";
import "./App.scss";
import Search from "./components/Control/Search";
import Sort from "./components/Control/Sort";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

function App(props) {
  const { onToggleForm, onEditTask, itemEditing, onOpenForm } = props;

  //function start

  const onHandleToggleForm = () => {
    if (itemEditing && itemEditing.id !== "") {
      onOpenForm();
      onEditTask({
        id: "",
        name: "",
        status: false,
      });
    } else {
      onToggleForm();
      onEditTask({
        id: "",
        name: "",
        status: false,
      });
    }
  };

  return (
    <div className="app">
      <h1 className="app-heading">Quản lý công việc</h1>
      <div className="app-body">
        <div className="container-left">
          <TaskForm />
        </div>

        <div className="container-right">
          <div className="container-right-heading">
            <button className="btn btn-right" onClick={onHandleToggleForm}>
              Thêm Công Việc
            </button>
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

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
