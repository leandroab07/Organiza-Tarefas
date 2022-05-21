import axios from 'axios';

const base_url = 'http://localhost:3001';

const getAllTasks = async () => {
  const response = await axios.get(`http://localhost:3001/tasks`);

  console.log('AQUIII', response)

  return response;
}

export { getAllTasks };