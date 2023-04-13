const url = 'http://localhost:3000/tasks';

const createTask = async (taskData) => {
	// POST: Inserta una tarea nueva en api/tasks

	try {
		
		const response = await fetch(url, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(taskData)
		});
		if (!response.ok) {
		  throw new Error(response.status + ' ' + response.statusText);
		}
		const data = await response.json();
		console.log(data);
		return data;
	  } catch (error) {
		console.log('Error en createTask:', error);
		throw error;
	  }
};

export default createTask;