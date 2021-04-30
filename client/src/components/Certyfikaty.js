import React, { useRef, useState, useEffect } from "react"
import ReactSiema from 'react-siema'

import cert1 from '../static/img/1.jpeg';
import cert2 from '../static/img/2.jpeg';
import cert3 from '../static/img/3.jpeg';
import cert4 from '../static/img/4.jpeg';
import cert5 from '../static/img/5.jpeg';
import cert6 from '../static/img/6.jpeg';
import cert7 from '../static/img/7.jpeg';
import cert8 from '../static/img/8.jpeg';
import cert9 from '../static/img/9.jpeg';
import cert10 from '../static/img/10.jpg';
import cert11 from '../static/img/11.jpg';

import leftImg from '../static/img/chevron_duo_left.svg'
import rightImg from '../static/img/chevron_duo_right.svg'

const Certyfikaty = () => {
  let [slide, setSlide] = useState(1);
  let [desktopView, setDesktopView] = useState(true);
  let siemaSlider;

  const d1 = useRef(null);
  const d2 = useRef(null);
  const d3 = useRef(null);

  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  const slides = [slide1, slide2, slide3];
  const dots = [d1, d2, d3];

  useEffect(() => {
    if(window.innerWidth > 1000) {
      setDesktopView(true);
    }
    else {
      setDesktopView(false);
    }

    window.addEventListener("resize", () => {
      if((window.innerWidth > 900)&&(window.innerWidth < 1100)) {
          if(window.innerWidth > 1000) {
            setDesktopView(true);
          }
          else {
            setDesktopView(false);
          }
      }
    })
  }, []);

  const left = () => {
    if(slide === 1) slider(3);
    else slider(slide-1);
  }

  const right = () => {
    if(slide === 3) slider(1);
    else slider(slide+1);
  }

  const slider = (n) => {
    setSlide(n);
    d1.current.style.background = "transparent";
    d2.current.style.background = "transparent";
    d3.current.style.background = "transparent";

    slide1.current.style.opacity = "0";
    slide2.current.style.opacity = "0";
    slide3.current.style.opacity = "0";

    slide1.current.style.display = "none";
    slide2.current.style.display = "none";
    slide3.current.style.display = "none";

    dots[n-1].current.style.background = "#B38D43";
    slides[n-1].current.style.display = "flex";
    setTimeout(() => {
      slides[n-1].current.style.opacity = "1";
    }, 500);
  }

  return (<section className="section certyfikaty">
    <h2 className="sectionHeader">
      Certyfikaty i dyplomy
    </h2>

    <div className="certyfikatyInner">
      <button onClick={() => { siemaSlider.prev() }} className="certyfikatyBtn certyfikatyBtnLeft">
        <img className="certyfikatyBtnImg" src={leftImg} alt="left" />
      </button>

        <div className="certyfikatySlider">
          <ReactSiema perPage={window.innerWidth > 1000 ? 3 : 1} ref={siema => siemaSlider = siema}>
            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert1} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert2} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert3} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert4} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert5} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert6} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert7} alt="certyfikat-tabularii" />
            </div>

            <div className="certyfikatyItem">
              <img className="certyfikat" src={cert9} alt="certyfikat-tabularii" />
            </div>
          </ReactSiema>
        </div>



      <button className="certyfikatyBtn certyfikatyBtnRight" onClick={() => { siemaSlider.next() }}>
        <img className="certyfikatyBtnImg" src={rightImg} alt="right" />
      </button>
    </div>
  </section>)
}

export default Certyfikaty;
