import React, { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello ever body 1" },
    { id: 2, title: "hello ever body 2" },
    { id: 3, title: "hello ever body 3" },
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function FetchPostList() {
      //...
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Failed to fecth post list:", error.message);
      }
    }
    FetchPostList();
  }, []);

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

  return (
    <div className="app">
      <h1>React Hook - TodoList</h1>
      <PostList posts={postList} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
