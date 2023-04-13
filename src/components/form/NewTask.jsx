import React, { useState } from "react";
import { useForm } from "react-hook-form";
import createTasks from "../../helpers/createTasks";

const NewTask = ({ task, setTask }) => {
  const [isDone, setIsDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();

    try {
      const newTask = await createTasks({
        
        name: data.name,
        isDone,
        id: data.length + 1,
      }
      
     );


      reset();
    } catch (error) {
      setErrorMessage("Error al crear la tarea");
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Inserta una tarea</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre de la tarea</label>
        <input {...register("name", { required: true })} />
        <input type="checkbox" checked={isDone} onChange={() => setIsDone(!isDone)} />
        <label>¿Terminada?</label>
        <button type="submit">Crear tarea</button>
      </form>
    </div>
  );
};

export default NewTask;
