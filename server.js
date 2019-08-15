const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const mailer = require("./server/mailer/mailer.js");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.post("/api/contact", (req, res) => {
      const { emailAddress, summary } = req.body;
      console.log(req.body);
      mailer
        .send(emailAddress, summary)
        .then(() => {
          console.log(`sent the message from ${emailAddress}`);
          res.status(200);
        })
        .catch(error => {
          console.log(
            `failed to send message , responded ${error && error.message}`
          );
          res.status(400);
          res.send("failure");
        });
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
