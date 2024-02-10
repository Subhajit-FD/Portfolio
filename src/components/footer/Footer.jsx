import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
   <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">SUBHAJIT</h1>

            <div className="footer__social">
            <a href="https://www.instagram.com/its_me_subho14/?igsh=bDZlYzF0NnhkOXJ0" className="footer__social-link" target="_blank">
          <i className="bx bxl-instagram"></i>
          </a>

        <a href="https://www.facebook.com/subhojit.choudhury.16?mibextid=ZbWKwL" className="footer__social-link" target="_blank">
          <i className="bx bxl-facebook"></i>
          </a>

        <a href="https://www.linkedin.com/in/subhajit-choudhury-a3680321a/" className="footer__social-link" target="_blank">
          <i className="bx bxl-linkedin"></i>
          </a>
            </div>

            <span className="footer__copy">&#169; SubhajitChoudhury. All rigths reserved</span>
        </div>
   </footer>
  )
}

export default Footer
