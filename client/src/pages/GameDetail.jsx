import { API_KEY, RAWG_URL } from '../services/globals'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
import axios from 'axios'

const GameDetail = ({ user }) => {
  let { gameId } = useParams()

  const [ratingForm, setRatingForm] = useState({
    gameName: '',
    gameId: gameId,
    userRating: '',
    user: user.id
  })

  const [gameDetail, setGameDetail] = useState({})
  const addAsFavorite = async () => {
    const response = await Client.post(
      `${BASE_URL}/games/new/${user.id}`,
      gameDetail
    )
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
    <div className="gameDetailContainer">
      <h2>{gameDetail.name}</h2>
      <img className="gameImage" src={gameDetail.background_image} alt="" />
      <p className="description">{gameDetail.description_raw}</p>
      <div className="infoContainer">
        <h4>Metacritic: {gameDetail.metacritic}</h4>
        <h4>Released: {gameDetail.released}</h4>
      </div>
      <button onClick={addAsFavorite}>Add Favorite</button>
    </div>
  )
}

export default GameDetail
