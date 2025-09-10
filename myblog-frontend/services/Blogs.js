import Client from './Api'

export const createBlog = async (blogData) => {
  try {
    const res = await Client.post('/blogs', blogData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllBlogs = async () => {
  try {
    const res = await Client.get('/blogs')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getBlogById = async (id) => {
  try {
    const res = await Client.get(`/blogs/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
