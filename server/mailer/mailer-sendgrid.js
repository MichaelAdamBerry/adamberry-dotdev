const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.API_KEY);

const send = (email, message) => {
  const msg = {
    to: "michaeladamberry3@gmail.com",
    from: email,
    subject: "SENDGRID - New Email from Website",
    text: message,
    html: `<p>${message}</p>`
  };

  return new Promise((resolve, reject) => {
    try {
      sgMail.send(msg);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = {
  send
};
