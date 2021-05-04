import React, { useRef, useState } from "react"

import oferta1 from '../static/img/ksiegowosc.jpg'
import oferta2 from '../static/img/kadry-i-place.jpg'
import oferta3 from '../static/img/pozostale.jpg'

const Oferta = () => {
  const modal = useRef(null);

  let [modalNumber, setModalNumber] = useState(0);

  const showPopup = n => {
    setModalNumber(n);

    modal.current.style.display = "block";
    modal.current.style.opacity = "1";
  }

  const modalExit = () => {
      modal.current.style.opacity = "0";
      setTimeout(() => {
        modal.current.style.display = "none";
      }, 500);
  }

  return <section className="section oferta" id="oferta">
    <div className="modal" ref={modal}>
      <div className="modalContent">
          <button className="modalExit" onClick={() => modalExit()}>
            &times;
          </button>



          <div className="modalContentText" id={modalNumber === 0 ? "" : "d-none"}>
            <h2 className="modalContentHeader">
              Zakres usług, które świadczymy w ramach pełnej księgowości (Ksiąg rachunkowych):
            </h2>
            <ul className="modalContentList">
              <li>1. Rejestracja/aktualizacja danych podmiotu.</li>
              <li>2. Opracowanie zakładowego planu kont oraz polityki rachunkowości dla potrzeb przedsiębiorstwa.</li>
              <li>3. Bieżąca ewidencja zdarzeń gospodarczych.</li>
              <li>4. Sporządzanie deklaracji, rozliczeń w zakresie podatku dochodowego (CIT) i podatku od towarów i usług (VAT).</li>
              <li>5. Przesyłanie JPK VAT do urzędu skarbowego.</li>
              <li>6. Prowadzenie ewidencji środków trwałych i wyposażenia wraz z miesięcznym naliczaniem amortyzacji.</li>
              <li>7. Sporządzanie bilansów, rachunków wyników.</li>
              <li>8. Okresowe sporządzanie sprawozdań dla GUS i NBP.</li>
              <li>9. Przygotowywanie niezbędnych zestawień pomocnych w zarządzaniu jednostką dla Zarządu, Rady nadzorczej
                itp.</li>
              <li>10. Reprezentacja przed organami skarbowymi (na życzenie klienta).</li>
            </ul>
          </div>

        <div className="modalContentText" id={modalNumber === 1 ? "" : "d-none"}>
          <h2 className="modalContentHeader">
            W ramach kadr i płac oferujemy:
          </h2>
          <ul className="modalContentList">
            <li>1. Prowadzenie ewidencji kadrowych związanych z zatrudnieniem pracowników.</li>
            <li>2. Naliczanie płac i składników ZUS.</li>
            <li>3. Sporządzanie deklaracji o dochodach pracowników.</li>
            <li>4. Sporządzanie deklaracji zgłoszeniowych do ubezpieczenia nowo zatrudnionych pracowników.</li>
            <li>5. Sporządzanie zaświadczeń o wynagrodzeniu pracowników.</li>
            <li>6. Prowadzenie ewidencji urlopowych.</li>
            <li>7. Naliczanie delegacji krajowych i zagranicznych.</li>
            <li>8. Wypowiadanie umów oraz sporządzanie świadectw pracy.</li>
            <li>9. Kompleksowa obsługa z zakresu BHP i Ppoż</li>
          </ul>
        </div>
      </div>
    </div>



    <div className="ofertaInner">
      <div className="ofertaItem">
        <div className="ofertaImgWrapper">
          <img className="ofertaImg" src={oferta1} alt="tabularii-biuro-rachunkowe" />
        </div>
        <h3 className="ofertaHeader">
          Pełna księgowość (księgi rachunkowe)
        </h3>
        <p className="ofertaText">
          Świadczymy kompleksowe usługi z zakresu pełnej księgowości, dzięki którym przedsiębiorca ma pełen obraz sytuacji
          finansowej swojej firmy.
        </p>

        <button className="landingBtn ofertaBtn" onClick={() => { showPopup(0)}}>
          <span className="landingBtnText">
            Dowiedz się więcej
          </span>
        </button>

      </div>

      <div className="ofertaItem">
        <div className="ofertaImgWrapper">
          <img className="ofertaImg" src={oferta2} alt="tabularii-biuro-rachunkowe" />
        </div>
        <h3 className="ofertaHeader">
          Kadry i płace
        </h3>
        <p className="ofertaText">
          Oferujemy pełen zakres usług kadrowo-płacowych.
        </p>

        <button className="landingBtn ofertaBtn" onClick={() => { showPopup(1)}}>
          <span className="landingBtnText">
            Dowiedz się więcej
          </span>
        </button>
      </div>

      <div className="ofertaItem">
        <div className="ofertaImgWrapper">
          <img className="ofertaImg" src={oferta3} alt="tabularii-biuro-rachunkowe" />
        </div>
        <h3 className="ofertaHeader">
          Pozostałe usługi
        </h3>
        <p className="ofertaText">
          Doradztwo i pomoc w zakładaniu działalności gospodarczej.
          Obsługa z zakresu BHP i Ppoż.  Kompleksowa obsługa w zakresie ochrony danych osobowych RODO.
          Rozliczenia roczne PIT dla osób fizycznych.
        </p>

        <button className="landingBtn ofertaBtn">
          <span className="landingBtnText">
            Dowiedz się więcej
          </span>
        </button>
      </div>
    </div>
  </section>
}

export default Oferta;
