const nodemailer = require("nodemailer");

const send = async ({ emailAddress, summary }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "michaeladamberry3@gmail.com",
      pass: process.env.SECRET_PASS
    }
  });

  const info = await transporter.sendMail(
    {
      from: "michaeladamberry3@gmail.com",
      to: "me@adamberry.dev",
      subject: `ADAMBERRY.dev contact form via Nodemailer`,
      text: `new message from ${emailAddress} : ${summary}`
    },
    (error, info) => {
      if (error) {
        return console.log(error.message);
      }
    }
  );

  console.log(info);
};

module.exports = send;
