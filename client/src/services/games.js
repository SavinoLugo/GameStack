import Client from './api'

export const GetUserFavorites = async (userId) => {
  try {
    const res = await Client.get(`/games/favorites/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
