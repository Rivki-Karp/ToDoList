import axios from 'axios';

// השתמש במשתנה סביבה
const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = apiUrl;

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const api = {
  getTasks: async () => {
    const result = await axios.get('/items');
    // אם התשובה לא מערך, מחזיר מערך ריק
    return Array.isArray(result.data) ? result.data : [];
  },

  addTask: async (name) => {
    const result = await axios.post('/items', { name, isComplete: false });
    return result.data;
  },

  setCompleted: async (todo, isComplete) => {
    const result = await axios.put(`/items/${todo.id}`, { name: todo.name, isComplete });
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/items/${id}`);
    return result.data;
  }
};

export default api;
