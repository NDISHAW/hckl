const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const API_KEY =
  "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";

sgMail.setApiKey(API_KEY)

app.post("/send-email", async (req, res) => {
  try {
    const { toEmail, subject, message, cartItems } = req.body;
    await sgMail.send({
      to: toEmail,
      from: "ndichumuriithi@gmail.com",
      subject: subject,
      html: `<p>${message}</p><table><thead><tr><th>Product</th><th>Price</th><th>Quantity</th></tr></thead><tbody>${cartItems
        .map(
          (item) =>
            `<tr><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`
        )
        .join("")}</tbody></table>`,
    });
    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
// const sgMail = require("@sendgrid/mail");

// const API_KEY =
//   "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";

// sgMail.setApiKey(API_KEY)

// // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const message = {
//   to: "ibrahndich@gmail.com",
//   from: "ndichumuriithi@gmail.com",
//   subject: "Hello from sendgrid",
//   html: `<table><thead><tr><th>Product</th><th>Price</th><th>Quantity</th></tr></thead><tbody>${cartItems
//     .map(
//       (item) =>
//         `<tr><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`
//     )
//     .join("")}</tbody></table>`,
// };

// sgMail.send(message)
// .then(response => console.log('Email sent successifuly'))
// .catch((error) => console.log(error.message))

// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USERNAME,
//     pass: process.env.GMAIL_PASSWORD,
//   },
// });

// app.post("/send-email", async (req, res) => {
//   try {
//     const { toEmail, subject, message, cartItems } = req.body;
//     await transporter.sendMail({
//       from: process.env.GMAIL_USERNAME,
//       to: toEmail,
//       subject,
//       html: `<p>${message}</p><table><thead><tr><th>Product</th><th>Price</th><th>Quantity</th></tr></thead><tbody>${cartItems
//         .map(
//           (item) =>
//             `<tr><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`
//         )
//         .join("")}</tbody></table>`,
//     });
//     res.send({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ success: false });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server listening on port 5000");
// });

// // import nodemailer from "nodemailer";

// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.post("/api/send-email", (req, res) => {
//   const { email, cartItems } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "SendGrid",
//     host: "	smtp.sendgrid.net",
//     auth: {
//       user: process.env.SENDGRID_USERNAME,
//       pass: process.env.SENDGRID_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: "abrahamnmuriithi@gmail.com",
//     to: email,
//     subject: "Shopping Cart Contents",
//     html: `<p>Here are the contents of your shopping cart:</p><ul>${cartItems
//       .map((item) => `<li>${item}</li>`)
//       .join("")}</ul>`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send("Failed to send email");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.send("Email sent successfully");
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
