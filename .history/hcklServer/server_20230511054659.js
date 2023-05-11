// const express = require("express");
// const cors = require("cors");
// const sgMail = require("@sendgrid/mail");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const API_KEY =
//   "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";

// sgMail.setApiKey(API_KEY)

// app.post("/send-email", async (req, res) => {
  
//   try {
//     const { toEmail,   } = req.body;
//     await sgMail.send({
//       to: toEmail,
//       from: "sales@hckl.co.ke",

//       html: `<p>heres your order</p>`,
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

// import nodemailer from "nodemailer";



const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { toEmail, cartItems, tot } = req.body;
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: toEmail, // Change to your recipient
    bcc: "info@hckl.co.ke",
    from: "info@hckl.co.ke", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    // html: `<p>Here are the contents of your shopping cart:</p><ul>${cartItems
    //   .map((item) => `<li>${item}</li>`)
    //   .join("")}</ul>`,
    html: `<table style="width: 100%; border-collapse: collapse;">
    
        <thead>
        <tr>
          <td colspan="3">
            <img src="https://hckl.co.ke/wp-content/uploads/2018/06/logo-web-1.png" alt="Header Image" style="width: 100%; max-width: 600px; items-align: center;">
          </td>
        </tr>
          <tr>
          <th style="border: 1px solid #ccc; padding: 10px;">Image</th>
            <th style="border: 1px solid #ccc; padding: 10px;">Title</th>
            <th style="border: 1px solid #ccc; padding: 10px;">Price</th>
            <th style="border: 1px solid #ccc; padding: 10px;">Quantity</th>
          </tr>
        </thead>
        <tbody>
          ${cartItems
            .map(
              (item) => `
                <tr>
                <td style="border: 1px solid #ccc; padding: 1px;">
            <img src=${item.imageURL} alt="Product Image" style="width: 20%; max-width: 20%;">
          </td>
                  <td style="border: 1px solid #ccc; padding: 10px;">${item.title}</td>
                  <td style="border: 1px solid #ccc; padding: 10px;">${item.price}</td>
                  <td style="border: 1px solid #ccc; padding: 10px;">${item.qty}</td>
                </tr>
              `
            )
            .join("")}
          <tr>
            <td colspan="3" style="text-align: center; border: 3px solid #ccc; padding: 20px;"><strong>Total price:</strong></td>
            <td style="border: 1px solid #ccc; padding: 10px;"><strong>KSH-${tot}</strong></td>
          </tr>
        </tbody>
      </table>`,
  };
  
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent", res);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(
//   "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"
// );
// const msg = {
//   to: 'ndichumuriithi@gmail.com', // Change to your recipient
//   from: 'info@hckl.co.ke', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })