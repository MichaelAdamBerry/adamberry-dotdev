import React, { useState } from "react";
import { Formik } from "formik";
import "isomorphic-fetch";
import * as Yup from "yup";

const ContactCardFormik = () => {
  async function sendEmail(values) {
    let data = await JSON.stringify(values);
    let response = await fetch("./api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain */*",
        "Content-Type": "application/json"
      },
      body: data
    });
    console.log("responed with ", response);
  }

  const [successfulSubmission, setSuccessfulSubmission] = useState();
  return (
    <>
      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          sendEmail(values);
          setSuccessfulSubmission(true);
          values.email = "";
          values.message = "";
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),

          message: Yup.string().required("Required")
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
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email address"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="message" style={{ display: "block" }}>
                Message
              </label>
              <input
                id="message"
                placeholder="How can I help?"
                type="text"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.message && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.message && touched.email && (
                <div className="input-feedback">{errors.message}</div>
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
      <style jsx>{`
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
