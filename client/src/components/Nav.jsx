import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3 className="welcomeMsg">Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to="/">
          SignOut
        </Link>
        <Link to="/games">Games</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/post">Review</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="NavLinks">
      <Link to="/register">Register</Link>
      <Link to="/signin">SignIn</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/games" className="logo">
        <h1 className="title">GameStack</h1>
      </Link>
      <div className="navBar">{user ? userOptions : publicOptions}</div>
    </header>
  )
}

export default Nav
