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


// import notfound1 from "./img/notfound1.jpeg";

const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { toEmail, cartItems, tot ,} = req.body;
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: toEmail, // Change to your recipient
    bcc: "info@hckl.co.ke",
    from: "info@hckl.co.ke", // Change to your verified sender
    subject: "Shopping Cart Order Confirmation",

    html: `<table style="width: 100%; border-collapse: collapse;">

          <thead>
          <tr>
            <td colspan="3">
              <img src="https://hckl.co.ke/wp-content/uploads/2018/06/logo-web-1.png" alt="Header Image" style="width: 100%; max-width: screen; items-justify: center;">
            </td>
          </tr>
            <tr>
            <th style="border: 3px solid #2B89D0; padding: 8px;">Image</th>
              <th style="border:3px solid #2B89D0; padding: 8px;">Title</th>
              <th style="border: 3px solid #2B89D0; padding: 8px;">Price</th>
              <th style="border: 3px solid #2B89D0; padding: 8px;">Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${cartItems
              .map(
                (item) => `
                  <tr>
                  <td style="border: 1px solid #2B89D0; padding: 1px;">
              <img src=${
                item?.imageURL 
              } alt="Product Image" style="width: 50%; max-width: 100%;">
            </td>
                    <td style="border: 1px solid #2B89D0; padding: 10px;">${
                      item.title
                    }</td>
              <td style="border: 1px solid #2B89D0; padding: 30px;"><strong>KSH   ${
                item.price
              }</strong></td>

                    <td style="border: 1px solid #2B89D0; padding: 10px;">${
                      item.qty
                    }</td>
                  </tr>
                `
              )
              .join("")}
            <tr>
              <td colspan="3" style="text-align: center; border: 3px solid #2B89D0; padding: 20px;"><strong>Total price:</strong></td>
              <td style="border: 8px solid #2B89D0; padding: 30px;"><strong>KSH   ${tot}</strong></td>
            </tr>
          </tbody>
        </table>`,
  };
//     html: `
//     <!DOCTYPE html>
// <html>
// <head>
//   <title>Sales Receipt</title>
//   <style>
//     /* Add your custom CSS styles here */
//     body {
//       font-family: Arial, sans-serif;
//       margin: 0;
//       padding: 0;
//     }
//     .header {
//       background-color: #f2f2f2;
//       padding: 20px;
//       text-align: center;
//     }
//     .logo {
//       max-width: 200px;
//       height: auto;
//     }
//     .table {
//       width: 100%;
//       border-collapse: collapse;
//       margin-top: 20px;
//     }
//     .table th, .table td {
//       border: 1px solid #ccc;
//       padding: 10px;
//     }
//     .footer {
//       margin-top: 20px;
//       text-align: right;
//     }
//   </style>
// </head>
// <body>
//   <div class="header">
//     <img class="logo" src="https://example.com/company-logo.png" alt="Company Logo">
//   </div>
//   <table class="table">
//     <thead>
//       <tr>
//         <th>Product</th>
//         <th>Price</th>
//         <th>Quantity</th>
//       </tr>
//     </thead>
//     <tbody>
     
//      <td>
//       ${cartItems.map((item) => (
//         <tr >
//           <td>{item.title}</td>
//           <td>{item.price}</td>
//           <td>{item.qty}</td>
//         </tr>
//       ))}
//      </td>
//     </tbody>
//   </table>
//   <div class="footer">
//     <strong>Total: ${tot}</strong>
//   </div>
// </body>
// </html>`,
  // };
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


// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.post("/send-email", (req, res) => {
//   const { toEmail, cartItems, tot } = req.body;
//   const sgMail = require("@sendgrid/mail");
//   sgMail.setApiKey(
//     "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"
//   );

//   const htmlTemplate = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Sales Receipt</title>
//       <style>
//         /* Add your custom CSS styles here */
//         body {
//           font-family: Arial, sans-serif;
//           margin: 0;
//           padding: 0;
//         }
//         .header {
//           background-color: #f2f2f2;
//           padding: 20px;
//           text-align: center;
//         }
//         .logo {
//           max-width: 200px;
//           height: auto;
//         }
//         .table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 20px;
//         }
//         .table th,
//         .table td {
//           border: 1px solid #ccc;
//           padding: 10px;
//         }
//         .footer {
//           margin-top: 20px;
//           text-align: right;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="header">
//         <img class="logo" src="https://example.com/company-logo.png" alt="Company Logo">
//       </div>
//       <table class="table">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${cartItems
//             .map(
//               (item) => `
//                 <tr>
//                   <td>${item.title}</td>
//                   <td>${item.price}</td>
//                   <td>${item.qty}</td>
//                 </tr>
//               `
//             )
//             .join("")}
//         </tbody>
//       </table>
//       <div class="footer">
//         <strong>Total: ${tot}</strong>
//       </div>
//     </body>
//     </html>
//   `;

//   const msg = {
//     to: toEmail,
//     bcc: "info@hckl.co.ke",
//     from: "info@hckl.co.ke",
//     subject: "Shopping Cart Order Confirmation",
//     html: htmlTemplate,
//   };

//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent");
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500);
//     });
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
