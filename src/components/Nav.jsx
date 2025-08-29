import {Link} from 'react-router-dom'
// import Logo from '../assets/Carro.png'

const Nav = () => {
  return (
    <header>
      <nav>
        {/* <img src={Logo} alt="logo"/> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/cliente">Cliente</Link>
          </li>

        </ul>
      </nav>
    </header>

  )
}

export default Nav