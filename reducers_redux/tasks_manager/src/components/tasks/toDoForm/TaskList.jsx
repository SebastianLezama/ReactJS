import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();
  return (
    <div>
      <div></div>
    </div>
  );
};

export default TaskList;
