import React, { useEffect, useRef, useState } from "react"

const Referencje = () => {
  let [slide, setSlide] = useState(1);

  const d1 = useRef(null);
  const d2 = useRef(null);
  const d3 = useRef(null);

  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  const slides = [slide1, slide2, slide3];
  const dots = [d1, d2, d3];

  useEffect(() => {

  }, [slide]);

  const left = async () => {
    if(slide === 1) slider(3);
    else slider(slide-1);
    await console.log("Left " + slide);
  }

  const right = async () => {
    if(slide === 3) await slider(1);
    else await slider(slide+1);
    await console.log("Right " + slide);
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

  return (<section className="section referencje">
    <h2 className="sectionHeader">
      Referencje
    </h2>
    <div className="referencjeInner">
      <button className="certyfikatyBtn certyfikatyBtnLeft" onClick={() => left()}>
        <img className="certyfikatyBtnImg" src={require("../../static/img/chevron_duo_left.svg")} alt="left" />
      </button>

      <div className="referencjeSlider">
        <div className={slide === 1 ? "referencjeSliderItem referencjeActive" : "referencjeSliderItem"} ref={slide1}>
          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari1
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className={slide === 2 ? "referencjeSliderItem referencjeActive" : "referencjeSliderItem"} ref={slide2}>
          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari2
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className={slide === 3 ? "referencjeSliderItem referencjeActive" : "referencjeSliderItem"} ref={slide3}>
          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="referencjeItem">
            <img className="referencjeImg" src={require("../../static/img/ferrari.png")} alt="referencje-1" />
            <h3 className="referencjeTitle">
              Ferrari3
            </h3>
            <p className="referencjeText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <button className="certyfikatyBtn certyfikatyBtnRight" onClick={() => right()}>
        <img className="certyfikatyBtnImg" src={require("../../static/img/chevron_duo_right.svg")} alt="right" />
      </button>

      <div className="certyfikatyDots">
        <span className="certyfikatyDot active" ref={d1} onClick={() => slider(1)}></span>
        <span className="certyfikatyDot" ref={d2} onClick={() => slider(2)}></span>
        <span className="certyfikatyDot" ref={d3} onClick={() => slider(3)}></span>
      </div>
    </div>
  </section>)
}

export default Referencje;
