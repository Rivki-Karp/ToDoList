import axios from 'axios';

// שימוש במשתנה סביבה במקום כתובת קבועה
const apiUrl = process.env.REACT_APP_API_URL; 

// הגדרת כתובת ברירת מחדל (Config Defaults)
axios.defaults.baseURL = apiUrl;

// Interceptor לטיפול בשגיאות
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
    return result.data;
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
