import React, { useState } from "react";
import "./index.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ToDo = ({ id, task, removeToDo, updateToDo, completionToDo, completed }) => {
  const [edit, setEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState(task);

  const handleRemove = () => {
    removeToDo(id);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateToDo(id, updateTask);
    setEdit(false);
  };

  const handleChange = (event) => {
    setUpdateTask(event.target.value);
  };

  const handleCompletion = (event) => {
    event.preventDefault();
    completionToDo(id);
  };

  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {edit ? (
        <CSSTransition key="editing" timeout={500} classNames="form">
          <form className="Todo-edit-form" onSubmit={handleSubmit}>
            <input type="text" value={updateTask.toString()} name="task" onChange={handleChange} />
            <button>Save</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={handleCompletion}>
            {task}
          </li>
        </CSSTransition>
      )}
      <div className="Todo-buttons">
        <button onClick={handleEdit}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={handleRemove}>
          <i className="fas fa-trash" />
        </button>
      </div>
    </TransitionGroup>
  );
};

export default ToDo;
