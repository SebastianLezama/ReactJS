import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Tasks.scss";
import {
  addTask,
  completeThisTask,
  deleteTask,
  editThisTask,
  removeTasks,
  saveThisTask,
} from "../../features/slices/tasksSlice";
import TasksList from "./TasksList";
import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TasksForm from "./TasksForm";

const Tasks = () => {
  const { user } = useSelector((state) => state.login);
  const { tasks } = useSelector((state) => state.tasks);

  const { taskId } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleTask = (text) => {
    const newTask = {
      id: uuidv4(),
      title: text,
    };
    text && dispatch(addTask(newTask));
  };

  const deleteThisTask = (id) => {
    dispatch(deleteTask(id));
  };
  const completeTask = (id) => {
    dispatch(completeThisTask(id));
  };
  const editTask = (id) => {
    dispatch(editThisTask(id));
  };
  const saveTask = (id, value) => {
    dispatch(saveThisTask({ id, value }));
    dispatch(editThisTask(id));
  };
  const removeAllTasks = () => {
    dispatch(removeTasks());
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    user.length === 0 && navigate("/login");
  }, [tasks, user]);
  return (
    <div>
      <Grid container m={3} justifyContent="center">
        <TasksForm handleTask={handleTask} removeAllTasks={removeAllTasks} />

        <TasksList
          taskId={taskId}
          tasks={tasks}
          deleteThisTask={deleteThisTask}
          completeTask={completeTask}
          editTask={editTask}
          saveTask={saveTask}
        />
      </Grid>
    </div>
  );
};

export default Tasks;
