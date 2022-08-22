import { Button, dividerClasses, Grid, Typography } from "@mui/material";
import React from "react";
import TaskFormEdit from "./TaskFormEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const TasksDetail = ({
  task,
  deleteThisTask,
  completeTask,
  editTask,
  saveTask,
}) => {
  return (
    <Grid
      sx={{
        boxShadow: 3,
        width: "40%",
        borderRadius: "5px",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "150px",
      }}
      p={3}
      m={2}
      bgcolor={task.complete ? "#929292" : "white"}
      item
      container
    >
      {task.edit ? (
        <TaskFormEdit task={task} saveTask={saveTask} />
      ) : (
        <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
          {task.title}
        </Typography>
      )}
      <Grid item justifyContent="space-between" sx={{ display: "flex" }}>
        <Button
          onClick={() => deleteThisTask(task.id)}
          variant="contained"
          startIcon={<DeleteIcon />}
          color="error"
        >
          Delete
        </Button>
        <Button
          disabled={task.edit}
          onClick={() => completeTask(task.id)}
          variant="contained"
        >
          {task.complete ? "Again" : "Complete"}
        </Button>
        <Button
          disabled={task.edit}
          onClick={() => editTask(task.id)}
          variant="contained"
          color="secondary"
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default TasksDetail;
