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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTitle"
        value={newTitle}
        placeholder={task.title}
        onChange={handleChange}
      />
      <Button onClick={() => saveTask(task.id, newTitle)}>Save</Button>
    </form>
  );
};

export default TaskFormEdit;
