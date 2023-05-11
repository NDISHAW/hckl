// import nodemailer from "nodemailer";

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const { email, cartItems } = req.body;

  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    host: ""
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  });

  const mailOptions = {
    from: "abrahamnmuriithi@gmail.com",
    to: email,
    subject: "Shopping Cart Contents",
    html: `<p>Here are the contents of your shopping cart:</p><ul>${cartItems
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
