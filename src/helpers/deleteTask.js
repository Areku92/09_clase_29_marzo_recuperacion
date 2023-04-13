const url = 'http://localhost:3000/tasks';

const deleteTask = async (taskId) => {
  // DELETE: Elimina una tarea existente en api/tasks/:id

  try {
    const response = await fetch(`${url}/${taskId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(response.status + ' ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error en deleteTask:', error);
    throw error;
  }
};

export default deleteTask;
