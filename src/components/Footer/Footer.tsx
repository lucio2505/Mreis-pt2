import './Footer.css'
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'
import logo from '../../assets/logo/logo-dourada.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Logo MREIS" className="footer-logo" />
        </div>

      <div>
        <span className="footer-email">Email: fotografiareism@gmail.com</span>  
      </div>  

        <div className="footer-social">
             <a href="https://www.instagram.com/mreis.fotografia/"  target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="footer-social-icon" />
             </a>
          </div>

          <a href="https://wa.me/5511969548619" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="footer-social-icon" />
          </a>
       </div>

      <div className="footer-bottom">
        <p>© 2026 MREIS. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer