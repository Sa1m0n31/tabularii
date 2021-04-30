import React from "react"

import onasimg from '../static/img/ksiegowosc.png'

const Onas = () => {
  return (<section className="section oNas" id="onas">
    <h2 className="sectionHeader">
      O nas
    </h2>
    <div className="oNasInner">
      <div className="oNasLeft">
        <h3 className="oNasHeader">
          Księgowość to nasza pasja
        </h3>
        <p className="oNasText">
          Jesteśmy zgranym zespołem, dla których księgowość to nie tylko nudne cyfry i papiery. Ta branża to przede wszystkim nasza pasja.
        </p>
        <p className="oNasText">
          Posiadamy duże doświadczenie, które chcemy wykorzystać, aby wspomóc współpracujące z nami firmy. Stale podnosimy swoje kwalifikacje, aby maksymalnie dostosować się do wymagań rynku. Swoim klientom oferujemy całkowicie indywidualne podejście. Nasza oferta to przede wszystkim kompleksowa obsługa z zakresu księgowości oraz kadr i płac. Wychodząc na przeciw oczekiwaniom wszystkich klientów, oferujemy prowadzenie księgowości online.
        </p>
      </div>

      <img className="oNasImg" src={onasimg} alt="tres-tabularii" />
    </div>
  </section>)
}

export default Onas;
