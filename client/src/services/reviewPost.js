import Client from './api'
import { BASE_URL } from './api'

export const addReviewPost = async (reviewForm) => {
  try {
    const res = await Client.post('/reviewPosts/new', reviewForm)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getReviewPost = async () => {
  try {
    const res = await Client.get(`${BASE_URL}/reviewPosts/all`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateReviewPost = async (postId, updateData) => {
  try {
    const res = await Client.put(`/reviewPosts/update/${postId}`, updateData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteReviewPost = async (postId) => {
  try {
    const res = await Client.delete(`/reviewPosts/delete/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
