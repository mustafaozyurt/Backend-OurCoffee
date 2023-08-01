const nodemailer = require("nodemailer");
const Subscription = require("../models/Subscription");

exports.sendContactForm = (req, res) => {
  try {
    const name = req.body?.name;
    const email = req.body?.email;
    const subject = req.body?.subject;
    const message = req.body?.message;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ status: "Empty Fields!" });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "mustafaozyurt38@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ status: "Failed to Send Email", error: error });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ status: "Email Sent", message: info.response });
      }
    });
  } catch (err) {
    res.status(500).json({ status: "Server Error", err: err.message });
  }
};

exports.contactSubscription = async (req, res) => {
  try {
    const email = req.body?.email;
    console.log(email)

    await Subscription.makeSubscription(email);

    res.json({
      status: "Subscribed",
    });
  } catch (err) {
    console.error(`error: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
};
