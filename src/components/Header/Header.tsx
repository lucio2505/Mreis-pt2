import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <h1 className="header-logo-placeholder">MREIS</h1>

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