import React, { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";

import "./App.scss";
import PostFiltersFrom from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";

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
    title_like: "",
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
    setFilter({
      ...filter,
      _page: newPage,
    });
  }
  function handleFiltersChange(newFilters) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(true);
  function handleShowClock() {
    return setShowClock(!showClock);
  }
  return (
    <div className="app">
      <h1>React Hook - Clock</h1>
      <button onClick={handleShowClock}>Hide Clock</button>
      {showClock && <Clock />}
      <BetterClock />
      <MagicBox />
      {/* <PostFiltersFrom onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
