import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to="/">
          SignOut
        </Link>
        <Link to="/"> Home </Link>
        <Link to="/games"> Games</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="NavLinks">
      <Link to="/">Home </Link>
      <Link to="/register"> Register </Link>
      <Link to="/signin"> SignIn </Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div>
          <h1>Nav Text</h1>
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
