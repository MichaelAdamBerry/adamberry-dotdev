const sgMail = require("@sendgrid/mail");

let API_KEY =
  "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";

sgMail.setApiKey(API_KEY);

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
