const dotenv = require("dotenv");
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mailer = require("./api/node-mailer");
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.post("/api/contact", (req, res) => {
    const { emailAddress, summary } = req.body;

    mailer({ emailAddress, summary })
      .then(() => {
        console.log("success");
        res.send("success");
      })
      .catch(error => {
        console.log("failed", error);
        res.send("badddd");
      });
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
