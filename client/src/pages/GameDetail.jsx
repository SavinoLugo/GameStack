import { API_KEY, RAWG_URL } from '../services/globals'
import { addRating, getUserRating } from '../services/rating'
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

  const [rating, setRating] = useState(null)

  const [gameDetail, setGameDetail] = useState({})

  const handleRatingChange = (event) => {
    setRatingForm({ ...ratingForm, userRating: event.target.value })
  }

  const handleRatingSubmit = async (event) => {
    event.preventDefault()
    let rating = await addRating(ratingForm)
    setRating(rating)
    setRatingForm({
      gameName: '',
      gameId: gameId,
      userRating: '',
      user: user.id
    })
  }

  const addAsFavorite = async () => {
    await Client.post(`${BASE_URL}/games/new/${user.id}`, gameDetail)
  }

  useEffect(() => {
    const getGameDetail = async () => {
      const response = await axios.get(
        `${RAWG_URL}/games/${gameId}?key=${API_KEY}`
      )
      setGameDetail(response.data)
      const rating = await getUserRating(user.id, gameId)
      setRating(rating)
      setRatingForm((prev) => ({ ...prev, gameName: response.data.name }))
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
        {rating ? (
          <h4>My Rating: {rating.userRating}</h4>
        ) : (
          <h4>Not rated yet</h4>
        )}
      </div>
      <form onSubmit={handleRatingSubmit}>
        <label htmlFor="rating">Your Rating:</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          step="0.5"
          value={ratingForm.userRating}
          onChange={handleRatingChange}
        />
        <button type="submit">Add Rating</button>
      </form>
      <button onClick={addAsFavorite}>Add Favorite</button>
    </div>
  )
}

export default GameDetail
