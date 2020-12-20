import React, { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";

import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello ever body 1" },
    { id: 2, title: "hello ever body 2" },
    { id: 3, title: "hello ever body 3" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function FetchPostList() {
      //...
      try {
        //query-string
        const paramsString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        console.log(responseJSON);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fecth post list:", error.message);
      }
    }
    FetchPostList();
  }, [filter]);

  //function
  function handleTodoList(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formvalues) {
    const newTodoList = [...todoList];
    const newTodo = {
      ...formvalues,
      id: Math.random() * 1000,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  function handlePageChange(newPage) {
    console.log(newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  return (
    <div className="app">
      <h1>React Hook - TodoList</h1>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
