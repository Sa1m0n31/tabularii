import React from "react"

import logo from '../static/img/tabularii-logo.png'

const Footer = () => {
  return (<footer className="footer">
    <img className="footerLogo" src={logo} alt="footer-logo-tabularii" />
    <h4 className="footerHeader1">Tabularii</h4>
    <h4 className="footerHeader1">
      Biuro Rachunkowe Anna Szymańska
    </h4>
    <h4 className="footerHeader1">
      ul. Warszawska 4/5
    </h4>
    <h4 className="footerHeader1">
      87-100 Toruń
    </h4>
    <h4 className="footerHeader1">
      tel. +48 667 260 795
    </h4>
    <h5 className="footerHeader2">Projekt i wykonanie: <a target="_blank" href="https://skylo.pl" rel="noreferrer">skylo.pl</a></h5>
  </footer>)
}

export default Footer;
