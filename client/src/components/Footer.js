import React from "react"

import logo from '../static/img/tabularii-logo.png'

const Footer = () => {
  return (<footer className="footer">
    <img className="footerLogo" src={logo} alt="footer-logo-tabularii" />
    <h4 className="footerHeader1">&copy; {new Date().getFullYear()} Tabularii</h4>
    <h5 className="footerHeader2">Projekt i wykonanie: <a target="_blank" href="https://skylo.pl" rel="noreferrer">skylo.pl</a></h5>
  </footer>)
}

export default Footer;
