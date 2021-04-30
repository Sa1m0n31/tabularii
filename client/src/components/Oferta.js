import React from "react"

import oferta1 from '../static/img/biuro-rachunkowe-1.png'
import oferta2 from '../static/img/biuro-rachunkowe-2.png'
import oferta3 from '../static/img/biuro-rachunkowe-3.png'

const Oferta = () => {
  return <section className="section oferta" id="oferta">
    <div className="ofertaInner">
      <div className="ofertaItem">
        <img className="ofertaImg" src={oferta1} alt="tres-tabularii" />
        <h3 className="ofertaHeader">
          Pełna księgowość
        </h3>
        <p className="ofertaText">
          Pomożemy Ci prowadzić Twoją jednoosobową działalność gospodarczą. Doradzimy, będziemy prowadzić Twoją <b>książkę przychodów i rozchodów </b>
          oraz pomożemy rozwinąć Twoją firmę. Dostosowując swoją ofertę do wszystkich klientów, prowadzimy także <b>księgowość online</b>!
        </p>
      </div>

      <div className="ofertaItem">
        <img className="ofertaImg" src={oferta2} alt="tres-tabularii" />
        <h3 className="ofertaHeader">
          Kadry i płace
        </h3>
        <p className="ofertaText">
          Oferujemy pełne wsparcie z zakresu prowadzenia <b>kadr oraz płac</b>. Możesz skupić się na doborze odpowiedniego personelu, a my poprowadzimy to od strony formalnej.
        </p>
      </div>

      <div className="ofertaItem">
        <img className="ofertaImg" src={oferta3} alt="tres-tabularii" />
        <h3 className="ofertaHeader">
          Zakładanie firm
        </h3>
        <p className="ofertaText">
          Doradzimy we wszelkich kwestiach związanych z <b>założeniem Twojej firmy</b>. Nie masz doświadczenia? Żaden problem, załóż i rozwijaj swoją działalność razem z nami.
        </p>
      </div>
    </div>
  </section>
}

export default Oferta;
