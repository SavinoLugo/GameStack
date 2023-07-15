import { API_KEY, RAWG_URL } from '../services/globals'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Games = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(`${RAWG_URL}/games?key=${API_KEY}`)
      console.log(response)
      setGames(response.data.results)
    }
    getGames()
  }, [])
  return (
    <div>
      {games.map((game) => (
        <Link to={`${game.id}`} key={game.id}>
          <h4>{game.name}</h4>
        </Link>
      ))}
    </div>
  )
}

export default Games
