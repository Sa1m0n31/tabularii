import React from "react"

import logo from '../static/img/tabularii-logo.png'
import cls from '../static/img/close.png'

const Menu = () => {
  const toONas = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      closeMenu();
      const el = document.querySelector("#onas");
      el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
  }

  const toKontakt = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      closeMenu();
      const el = document.querySelector("#kontakt");
      el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
  }

  const toOferta = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      closeMenu();
      const el = document.querySelector("#oferta");
      el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
  }

  const openMenu = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      const el = document.querySelector(".mobileMenu");
      el.style.transform = "translateX(0)";
    }
  }

  const closeMenu = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      const el = document.querySelector(".mobileMenu");
      if(el) el.style.transform = "translateX(1000px)";
    }
  }

  return (<>
    <menu className="menu">
    <img className="menuLogo" src={logo} alt="tres-tabularii" />

    <ul className="topMenu">
      <li className="topMenuItem" onClick={() => toOferta()}>Oferta</li>
      <li className="topMenuItem" onClick={() => toONas()}>
        O nas
      </li>
      <li className="topMenuItem" onClick={() => toKontakt()}>Kontakt</li>
    </ul>

    <button className="hamburgerMenu" onClick={() => openMenu()}>
      <span className="hamburgerLine"></span>
      <span className="hamburgerLine"></span>
      <span className="hamburgerLine"></span>
    </button>
  </menu>
  <ul className="mobileMenu">
    <button className="mobileMenuCloseBtn" onClick={() => closeMenu()}>
      <img className="mobileMenuCloseBtnImg" src={cls} alt="wyjdz" />
    </button>
    <li className="topMenuItem" onClick={() => toOferta()}>Oferta</li>
    <li className="topMenuItem" onClick={() => toONas()}>
      O nas
    </li>
    <li className="topMenuItem" onClick={() => toKontakt()}>Kontakt</li>
  </ul>
    </>
  )
}

export default Menu;
