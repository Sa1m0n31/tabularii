import React, { useRef, useState } from "react"

import oferta1 from '../static/img/ksiegowosc.jpg'
import oferta2 from '../static/img/kadry-i-place.jpg'
import oferta3 from '../static/img/pozostale.jpg'
import arrowRight from '../static/img/arrow-right.svg'

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
              Zakres usług, które świadczymy w ramach księgowości dla małych i dużych firm
            </h2>
            <ul className="modalContentList">
              <li>1. Rejestracja/aktualizacja danych podmiotu</li>
              <li>2. Opracowanie zakładowego planu kont oraz polityki rachunkowości dla potrzeb przedsiębiorstwa</li>
              <li>3. Bieżąca ewidencja zdarzeń gospodarczych</li>
              <li>4. Sporządzanie deklaracji, rozliczeń w zakresie podatku dochodowego (CIT) i podatku od towarów i usług (VAT)</li>
              <li>5. Przesyłanie JPK VAT do urzędu skarbowego</li>
              <li>6. Prowadzenie ewidencji środków trwałych i wyposażenia wraz z miesięcznym naliczaniem amortyzacji</li>
              <li>7. Sporządzanie bilansów, rachunków wyników</li>
              <li>8. Okresowe sporządzanie sprawozdań dla GUS i NBP</li>
              <li>9. Przygotowywanie niezbędnych zestawień pomocnych w zarządzaniu jednostką dla Zarządu, Rady nadzorczej
                itp.</li>
              <li>10. Reprezentacja przed organami skarbowymi (na życzenie klienta)</li>
            </ul>
          </div>

        <div className="modalContentText" id={modalNumber === 2 ? "" : "d-none"}>
          <h2 className="modalContentHeader">
            Zakres usług, które świadczymy w ramach Książki Przychodów i Rozchodów (KPiR)
          </h2>
          <ul className="modalContentList">
            <li>1. Rejestracja działalności gospodarczej /aktualizacja danych podmiotu</li>
            <li>2. Bieżąca ewidencja zdarzeń gospodarczych</li>
            <li>3. Ewidencja zakupów, sprzedaży VAT</li>
            <li>4. Sporządzanie deklaracji, rozliczeń w zakresie podatku dochodowego i podatku od towarów i usług (VAT)</li>
            <li>5. Prowadzenie ewidencji środków trwałych i wyposażenia</li>
            <li>6. Reprezentacja przed organami skarbowymi (na życzenie klienta)</li>
          </ul>
        </div>

        <div className="modalContentText" id={modalNumber === 3 ? "" : "d-none"}>
          <h2 className="modalContentHeader">
            Zakres usług, które świadczymy w ramach Ryczałtu (Ewidencji przychodów)
          </h2>
          <ul className="modalContentList">
            <li>1. Prowadzenie ewidencji przychodów</li>
            <li>2. Ewidencja środków trwałych i wyposażenia</li>
            <li>3. Sporządzanie i elektroniczne przesyłanie deklaracji podatkowych</li>
            <li>4. Reprezentacja przed organami skarbowymi (na życzenie klienta)</li>
            <li>5. Uczestniczenie w kontrolach skarbowych</li>
            <li>6. Sporządzenie deklaracji rocznej PIT-28</li>
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
          Księgowość
        </h3>

        <div className="ofertaLinks">
          <button className="ofertaLink" onClick={() => { showPopup(0)}}>
            Księgowość dla małych i dużych firm
            <img className="arrowRight" src={arrowRight} alt="wiecej" />
          </button>
          <button className="ofertaLink" onClick={() => { showPopup(2)}}>
            Książka Przychodów i Rozchodów (KPiR)
            <img className="arrowRight" src={arrowRight} alt="wiecej" />
          </button>
          <button className="ofertaLink" onClick={() => { showPopup(3)}}>
            Ryczałt (Ewidencja przychodów)
            <img className="arrowRight" src={arrowRight} alt="wiecej" />
          </button>
        </div>

        <p className="ofertaText">
          Przedsiębiorcy, którzy nie muszą prowadzić pełnej księgowości zobligowani są do prowadzenia tzw. małej księgowości inaczej zwanej księgowością uproszczoną. Nasze biuro świadczy kompleksowe usługi z zakresu małej księgowości.
        </p>

      </div>

      <div className="ofertaItem">
        <div className="ofertaImgWrapper">
          <img className="ofertaImg" src={oferta2} alt="tabularii-biuro-rachunkowe" />
        </div>
        <h3 className="ofertaHeader">
          Kadry i płace
        </h3>
        <p className="ofertaText">
          Oferujemy <b>pełen zakres usług kadrowo-płacowych</b>.
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
          <b>1.</b> Doradztwo i pomoc w zakładaniu działalności gospodarczej.<br/>
          <b>2.</b> Obsługa z zakresu BHP i Ppoż.<br/>
          <b>3.</b> Kompleksowa obsługa w zakresie ochrony danych osobowych RODO.<br/>
          <b>4.</b> Rozliczenia roczne PIT dla osób fizycznych.
        </p>
      </div>
    </div>
  </section>
}

export default Oferta;
