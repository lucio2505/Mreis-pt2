import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo/logo-dourada.png'
import { useEffect, useState } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 400) {
      setScrolled(true)
    }if (window.scrollY < 200) {
      setScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-content">

            <Link to="/">
            <img
              className="header-logo"
              src={logo}
              alt="Maiara Reis"
            />
            </Link>

            <nav>
              <Link to="/">Início</Link>
              <Link to="/fotografia">Fotografia</Link>
              <Link to="/marketing">Marketing</Link>
              <Link to="/trafego-pago">Tráfego Pago</Link>
              <Link to="/contato">Contato</Link>
            </nav>
         </div>
    </header>
  )
}

export default Header