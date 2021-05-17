import React, { useState, useEffect } from "react"
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3'

import { useFormik } from "formik"
import * as Yup from 'yup'
import axios from 'axios'

import mail from '../static/img/mail.svg'
import user from '../static/img/user_square.svg'
import phone from '../static/img/phone_outline.svg'

const Form = () => {
  let [send, setSend] = useState(false);
  let [recaptcha, setRecaptcha] = useState(false);

  useEffect(() => {
    loadReCaptcha('6Lflx5kaAAAAADk7MQ5YS0F4RuTMmIBMKYhJBM0h');
  }, []);

  useEffect(() => {
    if(send) {
      if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
        const form = document.querySelector(".formInner");
        const thanks = document.querySelector(".thanksContainer");
        form.style.opacity = "0";
        setTimeout(() => {
          thanks.style.display = "flex";
        }, 500);

        setTimeout(() => {
          thanks.style.display = "none";
          form.style.opacity = "1";
          setSend(false);
        }, 3000);
      }
    }
  }, [send]);

  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    msg: ""
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Wpisz swoje imie i nazwisko"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Niepoprawny numer telefonu")
        .required("Wpisz swój numer telefonu"),
      email: Yup.string()
        .email("Niepoprawny adres email")
        .required("Wpisz swój adres email")
    }),
    onSubmit: values => {
      // if(recaptcha) {
        axios.post("https://tabularii-ksiegowosc.pl/send", {
          form: values
        })
            .then(res => {
                setSend(true);
            })
            .catch(err => {
              console.log("Cos poszlo nie tak...");
            })
        formik.resetForm({});
      // }
    }
  })

  const verifyCallback = (recaptchaToken) => {
      if(recaptchaToken) {
        setRecaptcha(true);
      }
  }

  return (<section className="section form" id="kontakt">
    <h2 className="sectionHeader">
      Skontaktuj się z nami
    </h2>
    <h3 className="formHint">
      Wypełnij formularz i zostaw do siebie kontakt, a my oddzwonimy do Ciebie i umówimy się na konsultacje.
    </h3>

    <div className="contactContainer">
      <form className="formInner" method="POST" action="#" onSubmit={formik.handleSubmit}>
        <label>
          <img className="formIcon" src={user} alt="imie-i-nazwisko" />
          <input name="name" type="text" placeholder="Imię i nazwisko"
                 {...formik.getFieldProps("name")}
          />
        </label>

        <label>
          <img className="formIcon" src={phone} alt="numer-telefonu" />
          <input name="phoneNumber" type="text" placeholder="Numer telefonu"
                 {...formik.getFieldProps("phoneNumber")}
          />
        </label>

        <label>
          <img className="formIcon" src={mail} alt="adres-email" />
          <input name="email" type="text" placeholder="Adres email"
                 {...formik.getFieldProps("email")}
          />
        </label>

        <label>
        <textarea name="msg" placeholder="Uwagi, pytania (opcjonalnie)"
                  {...formik.getFieldProps("msg")}
        />
        </label>

        <ReCaptcha
            sitekey="6Lflx5kaAAAAADk7MQ5YS0F4RuTMmIBMKYhJBM0h"
            verifyCallback={verifyCallback}
        />

        <button type="submit" className="landingBtn formBtn">
          Wyślij formularz
        </button>
      </form>

      <div className="formContactData">
        <h4 className="footerHeader1 bold">Tabularii</h4>
        <h4 className="footerHeader1">
          Biuro Rachunkowe Anna Szymańska
        </h4>
        <h4 className="footerHeader1 extraMarginTop">
          ul. Warszawska 4/5
        </h4>
        <h4 className="footerHeader1">
          87-100 Toruń
        </h4>
        <h4 className="footerHeader1 extraMarginTop">
          tel. +48 667 260 795
        </h4>
      </div>
    </div>


    <div className="thanksContainer">
      <h2 className="thanksHeader">Twój formularz został pomyślnie wysłany</h2>
      <h3 className="thanksSubheader">Odezwiemy się najszybciej jak to możliwe</h3>
    </div>

  </section>)
}

export default Form;
