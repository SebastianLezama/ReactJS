import { Grid } from "@mui/material";
import React from "react";
import TasksDetail from "./TasksDetail";

const TasksList = ({
  taskId,
  tasks,
  deleteThisTask,
  completeTask,
  editTask,
  saveTask,
}) => {
  const filteredTasks = tasks.filter((task) => {
    switch (taskId) {
      case "completed": {
        return task.complete;
      }
      case "uncompleted": {
        return !task.complete;
      }
      default:
        return task;
    }
  });

  if (tasks.length === 0) {
    return <h1>Add a task</h1>;
  }

  return (
    <Grid
      container
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      {filteredTasks.map((task) => {
        return (
          <TasksDetail
            task={task}
            key={task.id}
            deleteThisTask={deleteThisTask}
            completeTask={completeTask}
            editTask={editTask}
            saveTask={saveTask}
          />
        );
      })}
    </Grid>
  );
};

export default TasksList;
