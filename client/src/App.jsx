import { CheckSession } from './services/Auth'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import GameDetail from './pages/GameDetail'
import ReviewPost from './pages/ReviewPost'
import Favorites from './pages/Favorites'
import Register from './pages/Register'
import SignIn from './pages/Signin'
import Nav from './components/Nav'
import Games from './pages/Games'
import Home from './pages/Home'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/games/:gameId"
            element={user ? <GameDetail user={user} setUser={setUser} /> : null}
          />
          <Route
            path="/favorites"
            element={user ? <Favorites user={user} /> : null}
          />
          <Route path="/post" element={<ReviewPost user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
