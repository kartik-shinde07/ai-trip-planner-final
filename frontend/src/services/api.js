import axios from "axios";

// Create reusable axios object

const api = axios.create({

  // Backend URL

  baseURL:
    "http://localhost:5000/api",

});

export default api;