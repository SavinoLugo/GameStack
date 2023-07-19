import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <section className="welcome-signin"></section>
    </div>
  )
}

export default Home
