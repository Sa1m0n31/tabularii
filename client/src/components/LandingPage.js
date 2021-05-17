import React from "react"

import Menu from "./Menu"

import icon1 from '../static/img/ranking.svg'
import icon2 from '../static/img/pc.svg'
import icon3 from '../static/img/multiple-files-stack.svg'

import arrow from '../static/img/thin_long_02_right.svg'

const LandingPage = () => {

  const goToOferta = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      const el = document.querySelector("#oferta");
      el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
  }

  return (<main className="landingPage">
      <Menu />

      <div className="landingCenter">
        <h1 className="landingHeader">
          Księgowość dla małych i dużych firm
        </h1>

        <button className="landingBtn" onClick={() => goToOferta()}>
          <span className="landingBtnText">
            Dowiedz się więcej
          </span>
          <img className="landingBtnArrow" src={arrow} alt="strzalka" />
        </button>
      </div>

    <div className="landingBottomBox">
      <h2 className="landingBottomHeader">
        <span className="bold">Tabularii</span>
        <span className="smaller">Biuro Rachunkowe</span>
        <span className="smaller">Anna Szymańska</span>
      </h2>

      <div className="landingBottomItem">
        <img className="landingBottomImg" src={icon1} alt="tres-tabularii" />
        <h3 className="landingBottomItemName">
          Profesjonalizm i doświadczenie
        </h3>
      </div>

      <div className="landingBottomItem">
        <img className="landingBottomImg" src={icon2} alt="tres-tabularii" />
        <h3 className="landingBottomItemName">
          Księgowość online
        </h3>
      </div>

      <div className="landingBottomItem">
        <img className="landingBottomImg" src={icon3} alt="tres-tabularii" />
        <h3 className="landingBottomItemName">
          Kompleksowa obsługa Twojej firmy
        </h3>
      </div>
    </div>


  </main>)
}

export default LandingPage;
