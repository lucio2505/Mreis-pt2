import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>MREIS</h2>
          <p>Fotografia, marketing e tráfego pago.</p>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            Instagram
          </a>

          <a href="#" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MREIS. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer