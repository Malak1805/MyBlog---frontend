import axios from 'axios'

// Get backend URL from Vite env
const BASE_URL = import.meta.env.VITE_BACKEND_URL
console.log('Backend URL:', BASE_URL) // should print http://localhost:3000

const Client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to every request if available
Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Client
