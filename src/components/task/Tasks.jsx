import { React, useState, useEffect } from "react";
import getTasks from "../../helpers/getTasks";
import Task from "./Task";
//Declaración de variables
const Tasks = () => {
  // Declaracion de estados
  const [tasks, setTasks] = useState([]);
  //Efectos
  useEffect(() => {
    getData();
   
  }, []);

  // Logica funcional
  const getData = () => {
    getTasks()
      .then((tasks) => {
        setTasks(tasks.reverse());
      })
      .catch((error) => console.error(error));
  };

  console.log(tasks)


  //return

  return (

    <div> {tasks.map(task => <Task task={task} key={task.id} /> )}
    
      
    
    </div>
  );
};
export default Tasks;
