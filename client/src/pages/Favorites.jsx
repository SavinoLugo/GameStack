import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import axios from 'axios'
import { GetUserFavorites } from '../services/games'

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getFavorites = async () => {
      const response = await GetUserFavorites(user.id)
      setFavorites(response)
    }
    getFavorites()
  }, [user.id])

  console.log(user)

  return (
    <div>
      <h4>Favorites</h4>
      {favorites.map((game) => (
        <div key={game._id}>
          <h4>Title: {game.title}</h4>
          <h4>Metacritic: {game.apiRating}</h4>
        </div>
      ))}
    </div>
  )
}

export default Favorites
