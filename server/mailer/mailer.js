const nodemailer = require("nodemailer");

const config = require("./config/config.js");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    connectionTimeout: "15000",
    ...config
  }
});

const send = (emailAddress, summary) => {
  const from = emailAddress;
  const message = {
    from,
    to: "michaeladamberry3@gmail.com",
    subject: `New message from ${from} MichaelAdamBerry.dev website contact form`,
    text: summary,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = {
  send
};
