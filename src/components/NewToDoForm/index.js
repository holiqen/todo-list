import React, { useState } from "react";
import { v4 } from "uuid";
import "./index.css";

const NewToDoForm = ({ createToDo }) => {
  const [task, setTask] = useState({ task: "" });

  const handleChange = (event) => {
    setTask((prevTask) => ({ ...prevTask, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createToDo({ ...task, id: v4() });
    setTask({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New ToDo</label>
      <input type="text" name="task" placeholder="New ToDo" id="task" value={task.task} onChange={handleChange} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewToDoForm;
