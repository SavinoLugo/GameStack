import { API_KEY, RAWG_URL } from '../services/globals'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
import axios from 'axios'

const GameDetail = ({ user, setUser }) => {
  const [gameDetail, setGameDetail] = useState([])
  let { gameId } = useParams()
  const addAsFavorite = async () => {
    const response = await Client.post(
      `${BASE_URL}/games/new/${user.id}`,
      gameDetail
    )
    setUser({ ...user, favorites: [...user.favorites, response.data] })
  }
  useEffect(() => {
    const getGameDetail = async () => {
      const response = await axios.get(
        `${RAWG_URL}/games/${gameId}?key=${API_KEY}`
      )
      setGameDetail(response.data)
    }
    getGameDetail()
  }, [gameId])
  return (
    <div>
      <h2>{gameDetail.name}</h2>
      <img src={gameDetail.background_image} alt="" />
      <p>{gameDetail.description_raw}</p>
      <button onClick={addAsFavorite}>Add Favorite</button>
    </div>
  )
}

export default GameDetail
