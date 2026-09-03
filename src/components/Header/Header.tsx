import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo/logo-dourada.png'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo MREIS" className="header-logo" />

      <nav>
        <Link to="/">Início</Link>
        <Link to="/fotografia">Fotografia</Link>
        <Link to="/marketing">Marketing</Link>
        <Link to="/trafego-pago">Tráfego Pago</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

export default Header