import Client from './api'

export const addRating = async (ratingForm) => {
  try {
    const res = await Client.post('/rating/new', ratingForm)
    return res.data
  } catch (error) {
    throw error
  }
}
