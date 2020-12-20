import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //JS code

  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form action="#">
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandle}
      />
      <button onClick={submitHandle} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          id=""
          className="filter-btn"
          onClick={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
