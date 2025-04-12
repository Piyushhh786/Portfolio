const express = require("express");
const app  = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.port || 8080;
app.use(cors({origin: "https://piyushhh786-web.onrender.com/"}));
app.use(express.json());
const axios = require("axios");

app.post('/contact', async (req, res) => {
    const { name, email, subject, message , captcha} = req.body;
    // console.log("req sended to the correct api")
    if (!name || !email || !subject || !message ||!captcha) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    // console.log("run1 successfull");
    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
            params: {
              secret: process.env.RECAPTCHA_SECRET, // Put this in your .env
              response: captcha
            }
        });
        if (!response.data.success) {
            return res.status(400).json({ message: 'Captcha verification failed' });
          }

        const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:587,
        secure:false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });
  
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.SEC_EMAIL, // Your own email to receive messages
        subject: subject,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong><br/>${message}</p>`
      });
  
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Email sending failed' });
    }
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));