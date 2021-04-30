const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const app = express();

/* Enable cors */
app.use(cors());

/* Enable body in http request */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Serve static React page */
app.use(express.static(path.join(__dirname, '../client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* Send form */
app.post("/send", async (req, res) => {
    const form = req.body.form;

    /* Nodemailer */
    let transporter = nodemailer.createTransport(smtpTransport ({
        auth: {
            user: 'klient@trestabularii.pl',   //email of sender
            pass: 'klienttrestabularii123'    //password of sender
        },
        host: 'skylo-pl.atthost24.pl',    //my email host
        secureConnection: true,
        port: 587,
        tls: {
            rejectUnauthorized: false
        },
    }));

    /* Convert msg to string */
    let msg = JSON.stringify(form).replace(/,/g, '\n').replace(/"/g, ' ')
        .replace(/ :/g, ":")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace("email", "Adres email")
        .replace("name", "Imię i nazwisko")
        .replace("phoneNumber", "Numer telefonu")
        .replace("msg", "Wiadomość");

    let mailOptions = {
        from: 'klient@trestabularii.pl',
        to: 'kontakt@trestabularii.pl',
        subject: 'Wiadomość z formularza kontaktowego',
        text: msg
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        }else{
            console.log("success");
        }
    });
});

/* Run the app */
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});