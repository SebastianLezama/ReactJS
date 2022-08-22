import { Button, Grid, TextField } from "@mui/material";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Tasks.scss";

const TasksForm = ({ handleTask, removeAllTasks }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTask(text);
    setText("");
  };

  const { pathname } = useLocation();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Grid container flexDirection="column" mb="10px">
      <form onSubmit={handleSubmit} className="tasksForm">
        <div className="links">
          <Link
            className={pathname === "/tasks/completed" ? "activeLink" : ""}
            to="/tasks/completed"
          >
            Completed
          </Link>
          <Link
            className={pathname === "/tasks/uncompleted" ? "activeLink" : ""}
            to="/tasks/uncompleted"
          >
            Uncompleted
          </Link>
          <Link className={pathname === "/" ? "activeLink" : ""} to="/">
            All
          </Link>
        </div>
        <div className="taskInput">
          <TextField
            className="taskText"
            id="outlined-basic"
            label="Task..."
            variant="outlined"
            type="text"
            value={text}
            onChange={handleChange}
          />
          <div>
            <Button variant="outlined" type="submit">
              Add
            </Button>
            <Button variant="outlined" color="error" onClick={removeAllTasks}>
              Remove All
            </Button>
          </div>
        </div>
      </form>
    </Grid>
  );
};

export default TasksForm;
