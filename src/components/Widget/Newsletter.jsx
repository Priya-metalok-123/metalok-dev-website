import React, { useState } from "react";
import Div from "../Div";

export default function Newsletter({ title, subtitle, placeholder }) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domainPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]+$/;

    if (!email) {
      setErrorMessage("Please enter an email");
      return;
    }

    const [emailPrefix, emailDomain] = email.split("@");

    if (!emailPattern.test(email)) {
      if (!emailDomain) {
        setErrorMessage("This email address is missing the domain name, which is required.");
      } else if (emailDomain.startsWith(".")) {
        setErrorMessage("This email address has a dot at the beginning of the domain name, which is not allowed.");
      } else if (emailDomain.endsWith(".")) {
        setErrorMessage("This email address has a dot at the end of the domain name, which is not allowed.");
      } else if (emailDomain.startsWith("-")) {
        setErrorMessage("This email address has a hyphen at the beginning of the domain name, which is not allowed.");
      } else if (emailDomain.endsWith("-")) {
        setErrorMessage("This email address has a hyphen at the end of the domain name, which is not allowed.");
      } else if (!domainPattern.test(emailDomain)) {
        setErrorMessage("This email address has an invalid domain name.");
      } else {
        setErrorMessage("Invalid email format");
      }
      return;
    }

    const config = {
      SecureToken: "2b9447bf-264f-4765-bc13-474d1200ce32",
      To: "umadevi@metalok.io",
      From: "kyyte@kyyte.io",
      Subject: "Demo Subject For Kyyte Contact Form",
      Body: "dfghjkl",
    };

    if (window.Email) {
      window.Email.send(config)
        .then((message) => {
          // alert("Email sent successfully", message);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }

    // Clear the email field and error message
    setEmail("");
    setErrorMessage("");

    // Display a success message
    setSuccessMessage("Email submitted successfully");

    // Clear the success message after 2 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form action="#" className="cs-newsletter_form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="cs-newsletter_input"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage && (
            <div className="error-message" style={{ color: "red" }}>
              {errorMessage}
            </div>
          )}
          <button className="cs-newsletter_btn">
            <span>Send</span>
          </button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
        {successMessage && <Div className="cs-success_message">{successMessage}</Div>}
      </Div>
    </>
  );
}
