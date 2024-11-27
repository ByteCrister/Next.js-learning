import axios from 'axios';

const getTodos = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_TODO_URL}/todos`);
    return res.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return null;
  }
};

export default getTodos;