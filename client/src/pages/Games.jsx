import { API_KEY, RAWG_URL } from '../services/globals'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Games = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(`${RAWG_URL}/games?key=${API_KEY}`)
      setGames(response.data.results)
    }
    getGames()
  }, [])

  return (
    <div className="gameDiv">
      {games.map((game) => (
        <Link to={`${game.id}`} key={game.id} className="gameLink">
          <img className="gameImage" src={game.background_image} alt="" />
          <h4>{game.name}</h4>
        </Link>
      ))}
    </div>
  )
}

export default Games
