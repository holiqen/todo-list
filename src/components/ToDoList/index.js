import React, { useState } from "react";
import ToDo from "../ToDo";
import NewToDoForm from "../NewToDoForm";
import "./index.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const createToDo = (newToDo) => {
    setTodos((prevTodos) => [...prevTodos, newToDo]);
  };

  const removeToDo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateToDo = (id, updateTask) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const completionToDo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <div className="TodoList">
      <h1>
        Get To Work! <span>An Animated Todo List Made With React Hooks.</span>
      </h1>
      <ul>
        <TransitionGroup className="todo-list">
          {todos.map((todo) => (
            <CSSTransition key={todo.id} timeout={500} classNames="todo">
              <ToDo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                removeToDo={removeToDo}
                updateToDo={updateToDo}
                completionToDo={completionToDo}
                completed={todo.completed}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <NewToDoForm createToDo={createToDo} />
    </div>
  );
};

export default ToDoList;
