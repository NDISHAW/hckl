import node

const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/send-email', (req, res) => {
  const { email, cartItems } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    auth: {
      user: 'username',
      pass: 'password'
    }
  });

  const mailOptions = {
    from: 'you@example.com',
    to: email,
    subject: 'Shopping cart contents',
    html: `<p>Here are the contents of your shopping cart:</p><ul>${cartItems.map(item => `<li>${item}</li>`).join('')}</ul>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});