import Client from './Api'

// Register user
export const RegisterUser = async (data) => {
  console.log("RegisterUser called with data:", data)
  try {
    const res = await Client.post('/auth/register', data)
    console.log("Response from backend:", res)
    return res.data
  } catch (error) {
    // Log actual error from backend
    console.error(error.response?.data || error.message)
    throw error
  }
}

// Sign in user
export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data
  } catch (error) {
    console.error(error.response?.data || error.message)
    throw error
  }
}

// Check session
export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    console.error(error.response?.data || error.message)
    throw error
  }
}
