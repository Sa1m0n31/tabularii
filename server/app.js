const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const app = express();

/* Enable cors */
app.use(cors({credentials: true, origin: true}));

/* Enable body in http request */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* Redirect http to https */
app.enable('trust proxy');
app.use (function (req, res, next) {
    if (req.secure) {
        // request was via https, so do no special handling
        next();
    } else {
        // request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
    }
});

/* Send form */
app.post("/send", async (req, res) => {
    const form = req.body.form;

    /* Nodemailer */
    let transporter = nodemailer.createTransport(smtpTransport ({
        auth: {
            user: 'form@tabularii-ksiegowosc.pl',   //email of sender
            pass: 'tabulariiksiegowosc123'    //password of sender
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
        from: 'form@tabularii-ksiegowosc.pl',
        to: 'kontakt@tabularii-ksiegowosc.pl',
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


/* Serve static React page */
app.use(express.static(path.join(__dirname, '../client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* Run the app */
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});