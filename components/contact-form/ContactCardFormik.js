import React, { useState } from "react";

import { Formik } from "formik";

import * as Yup from "yup";
import "isomorphic-fetch";

const ContactCardFormik = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  function sendWithNodeMailer(data) {
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        setSubmitted(true);
      }
    });
    console.log(data);
  }
  //TODO render conditionally success modal
  return (
    <>
      {!isSubmitted ? (
        <Formik
          initialValues={{ emailAddress: "", summary: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            sendWithNodeMailer({
              emailAddress: values.emailAddress,
              summary: values.summary
            });

            values.emailAddress = "";
            values.summary = "";
            setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            emailAddress: Yup.string().required("Required"),

            summary: Yup.string().required("Required")
          })}>
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="emailAddress" style={{ display: "block" }}>
                  Email
                </label>
                <input
                  id="emailAddress"
                  placeholder="Enter your email address"
                  type="text"
                  value={values.emailAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.emailAddress && touched.emailAddress
                      ? "text-input error"
                      : "text-input"
                  }
                />

                {errors.emailAddress && touched.emailAddress && (
                  <div className="input-feedback">{errors.emailAddress}</div>
                )}

                <label htmlFor="summary" style={{ display: "block" }}>
                  Message
                </label>
                <input
                  id="summary"
                  placeholder="How can I help?"
                  type="text"
                  value={values.summary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.summary && touched.emailAddress
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.summary && touched.emailAddress && (
                  <div className="input-feedback">{errors.summary}</div>
                )}

                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}>
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Send
                </button>
              </form>
            );
          }}
        </Formik>
      ) : (
        <div className="success">
          <p>Thanks for reaching out! I'll be in touch soon.</p>
        </div>
      )}
      <style jsx>{`
        .success {
          height: 50%;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
        }
        .success p {
          font-size: 1.3rem;
          color: var(--dark-purp);
        }

        input {
          padding: 0.5rem;
          font-size: 16px;
          width: 95%;
          display: block;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        input:focus {
          border-color: #007eff;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 0 3px rgba(0, 126, 255, 0.1);
          outline: none;
        }

        input.error {
          border-color: red;
        }

        label {
          font-weight: bold;
          display: block;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: var(--blueish);
        }

        .input-feedback {
          color: red;
          margin-top: 0.25rem;
        }

        button {
          max-width: 150px;
          margin: 20px 0;
          padding: 12px 20px;
          border-style: none;
          border-radius: 5px;
          background-color: var(--blueish);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
          font-size: 17px;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          outline: none;
          -webkit-appearance: none;
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed !important;
        }

        button + button {
          margin-left: 0.5rem;
        }

        button.outline {
          background-color: #eee;
          border: 1px solid #aaa;
          color: #555;
        }
      `}</style>
    </>
  );
};

export default ContactCardFormik;
