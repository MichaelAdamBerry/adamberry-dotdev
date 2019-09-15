import React, { useState } from "react";
import "isomorphic-fetch";

const ContactCard = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [loadingState, setLoadingState] = useState("preload");
  const [formValid, setFormValid] = useState(false);
  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "emailAddress") {
      setEmailAddress(value);
    } else if (name === "summary") {
      setSummary(value);
    } else {
      console.error("Error invalid name input");
    }
    validateForm();
  };

  const onSubmit = async e => {
    if (formValid) {
      setLoadingState("loading");
      console.log("email and summary are", emailAddress, summary, loadingState);

      const data = { emailAddress, summary };

      fetch("./api/contact", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => {
        res.status === 200
          ? setLoadingState("submitted")
          : setLoadingState("error");
      });
    }
  };

  const validateEmail = () => {
    const message =
      emailAddress === 0 ? "Email must be valid" : "Email is valid";
    const isValid = emailAddress.length > 0;
    return {
      message,
      isValid
    };
  };

  const validateSummary = () => {
    const message = summary === 0 ? "Email must be valid" : "Email is valid";
    const isValid = summary.length > 0;
    return {
      message,
      isValid
    };
  };

  const validateForm = () => {
    const status = validateEmail().isValid && validateSummary().isValid;
    setFormValid(status);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={emailAddress}
          onChange={e => onChange(e)}
          placeholder="Email Address"
          name="emailAddress"
        />
        <input
          type="text"
          value={summary}
          onChange={e => onChange(e)}
          name="summary"
          placeholder="Project Summary"
        />
        <button onClick={onSubmit}>Request a Quote</button>
      </form>
      <style jsx>{`
        input {
          background: none;
          border: none;
          line-height: 1.5rem;
          color: #bfb5b5;
          border-bottom: solid;
          font-size: 1.3rem;
        }

        input:nth-child(1) {
          margin-bottom: 1rem;
          width: 20rem;
          display: block;
        }

        input:nth-child(2) {
          margin-right: 1rem;
          width: 14rem;
        }
        input:nth-child(3) {
          width: 5rem;
        }

        input:focus {
          outline: none;
        }

        button {
          width: 12rem;
          height: 2.5rem;
          font-size: 1.3rem;
          line-height: 1.3rem;
          border-radius: 18px;
          color: #de4daa;
          display: block;
          margin-top: 2rem;
        }
        ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #bfb5b5;
        }
        ::-moz-placeholder {
          /* Firefox 19+ */
          color: #bfb5b5;
        }
        :-ms-input-placeholder {
          /* IE 10+ */
          color: #bfb5b5;
        }
        :-moz-placeholder {
          /* Firefox 18- */
          color: #bfb5b5;
        }

        .custom-file-input::-webkit-file-upload-button {
          visibility: hidden;
        }
        .custom-file-input::after {
          content: "File 📎";
          display: inline-block;
          background: linear-gradient(top, #f9f9f9, #e3e3e3);
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          cursor: pointer;
        }
        .custom-file-input:hover::before {
          border-color: black;
        }
        .custom-file-input:active::before {
          background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
        }

        .custom-file-input ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: blue;
        }
      `}</style>
    </>
  );
};

export default ContactCard;
