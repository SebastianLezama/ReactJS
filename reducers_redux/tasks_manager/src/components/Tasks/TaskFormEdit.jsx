import { Button } from "@mui/material";
import React, { useState } from "react";

const TaskFormEdit = ({ task, saveTask }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const editTask = () => {
    if (newTitle.length === 0) {
      saveTask(task.id, task.title);
    } else {
      saveTask(task.id, newTitle);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTitle"
        value={newTitle}
        placeholder={task.title}
        onChange={handleChange}
      />
      <Button onClick={() => editTask()}>Save</Button>
    </form>
  );
};

export default TaskFormEdit;
