import Client from './api'

export const GetUserFavorites = async (userId) => {
  try {
    const res = await Client.get(`/games/favorites/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const RemoveUserFavorite = async (userId, gameId) => {
  try {
    const res = await Client.delete(`/games/remove/${userId}/${gameId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const ShowUserRating = async () => {
  try {
    const res = await Client.get('/rating/show')
    return res.data
  } catch (error) {
    throw error
  }
}
