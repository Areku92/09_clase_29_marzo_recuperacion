import React from "react";
import deleteTask from "../../helpers/deleteTask";

const Task = ({ task }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteTask(task.id);
      console.log(`Task ${task.id} deleted`);
   
    } catch (error) {
      console.error(`Error deleting task ${task.id}: `, error);
    }
  };

  return (
    <div>
      <h1>{task.name}</h1>
      <h3>{task.isDone ? "finalizada" : "No finalizada"}</h3>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default Task;
