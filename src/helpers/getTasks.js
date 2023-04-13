const url = 'http://localhost:3000/tasks';

// GET: Devuelve todos los products de api/tasks
const getTasks= async () => {
	try {
		const response = await fetch(url);
		if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
    
		const data = await response.json();
       
		return data;
	} catch (error) {
		console.log(error);
	}
};




export default getTasks;