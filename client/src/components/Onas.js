import React from "react"

import onasimg from '../static/img/ksiegowosc.png'

const Onas = () => {
  return (<section className="section oNas" id="onas">
    <h2 className="sectionHeader">
      O mnie
    </h2>
    <div className="oNasInner">
      <div className="oNasLeft">
        <h3 className="oNasHeader">
          Księgowość to moja pasja
        </h3>
        <p className="oNasText">
          Dla mnie księgowość to nie tylko nudne cyfry i papiery, dla mnie księgowość to przede wszystkim pasja.
        </p>
        <p className="oNasText">
          Posiadam wieloletnie doświadczenie zawodowe poparte certyfikatami i dyplomami. Dzięki członkowstwu w SKwP wciąż
          aktualizuję swoją wiedzę poprzez szkolenia w najbardziej znanym i rozpoznawanym stowarzyszeniu księgowych w
          Polsce.
        </p>
        <p className="oNasText">
          Ideą mojej firmy jest: wspomóc przedsiębiorców w działalności którą prowadzą. Jestem tu aby wesprzeć od strony
          teoretycznej i praktycznej Twój biznes.
        </p>
        <p className="oNasText">
          Biuro rachunkowe, które prowadzę posiada ubezpieczenie OC PZU oraz licencjonowane oprogramowanie księgowe ERP
          Enova 365 uwzględniające najnowsze przepisy podatkowe.
        </p>
      </div>

      <img className="oNasImg" src={onasimg} alt="tres-tabularii" />
    </div>
  </section>)
}

export default Onas;
