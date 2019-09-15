const app = require("express")();
const bodyParser = require("body-parser");
const mailer = require("./mailer/mailer-sendgrid.js");

app.use(bodyParser.json());

app.post("*", (req, res) => {
  const { emailAddress, summary } = req.body;

  mailer
    .send(emailAddress, summary)
    .then(() => {
      console.log(
        `Sent the message "${messageText}" from <${firstName}> ${emailAddress}.`
      );
      res.status(200);
      res.send("success");
    })
    .catch(error => {
      console.log(
        `Failed to send the message "${messageText}" from <${firstName}> ${emailAddress} with the error ${error &&
          error.message}`
      );
      res.status(400);
      res.send("failure");
    });
});

module.exports = app;
