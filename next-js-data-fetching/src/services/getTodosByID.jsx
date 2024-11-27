import axios from "axios";

const getTodosByID = async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await res.data;
};

export default getTodosByID