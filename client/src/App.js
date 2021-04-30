import React from "react";

import './static/style/style.css'
import './static/style/mobile.css'

import LandingPage from "./components/LandingPage";
import Oferta from "./components/Oferta";
import Onas from "./components/Onas";
import Certyfikaty from "./components/Certyfikaty";
import Form from "./components/Form";
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";

function App() {
  return (<>
          <Helmet>
              <title>Tres Tabularii</title>
              <link rel="icon" type="image/png" href="./static/img/sygnet.png"/>
              <link rel="icon" type="image/png" href="./static/img/sygnet.png"/>
          </Helmet>
      <div className="container">
        <LandingPage />
        <Oferta />
        <Onas />
        <Certyfikaty />
        <Form />
        <Footer />
      </div>
      </>
  );
}

export default App;
