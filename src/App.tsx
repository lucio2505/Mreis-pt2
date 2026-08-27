import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

import Fotografia from './pages/Fotografia/Fotografia'
import Marketing from './pages/Marketing/Marketing'
import TrafegoPago from './pages/TrafegoPago/TrafegoPago'
import Contato from './pages/Contato/Contato'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotografia" element={<Fotografia />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/trafego-pago" element={<TrafegoPago />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App