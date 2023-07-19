import { useEffect, useState } from 'react'
import {
  GetUserFavorites,
  RemoveUserFavorite,
  ShowUserRating
} from '../services/games'

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getFavorites = async () => {
      const response = await GetUserFavorites(user.id)
      setFavorites(response)
    }
    getFavorites()
  }, [user.id])

  const deleteFavorite = async (gameId) => {
    await RemoveUserFavorite(user.id, gameId)
    setFavorites(favorites.filter((game) => game._id !== gameId))
  }

  return (
    <div>
      <h4>Favorites</h4>
      {favorites.map((game) => (
        <div key={game._id} className="gameContainer">
          <img className="gameImage" src={game.image} alt="" />
          <div className="gameInfo">
            <h4>Title: {game.title}</h4>
            <h4>Metacritic: {game.apiRating}</h4>
            <button onClick={() => deleteFavorite(game._id)}>
              Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Favorites
