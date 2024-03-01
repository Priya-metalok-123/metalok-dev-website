import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { pageTitle } from "../../helper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Div from "../Div";
import PageHeading from "../PageHeading";
//import { GoogleMap, Marker } from "@react-google-maps/api";

import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import ContactWidget from "../Widget/ContactWidget";
import ContactDynamic from "./contactDynamic";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, resetForm } from "./Store";
import store from "./Store";

// import 'smtpjs/smtp.js';

export default function ContactPage() {
  console.log("store..", store);
  pageTitle("Contact Us");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const location = {
  //   lat: 17.4408033,
  //   lng: 78.3870545,
  // };
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state) => state?.isSubmitted);
  const reduxEmail = useSelector((store) => store?.form?.email);
  const reduxForm = useSelector((store) => store?.form);
  console.log("reduxEmail..", reduxEmail, typeof reduxForm);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      projectType: "",
      mobile: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(/^[A-Za-z\s]{3,}$/, "Invalid name please enter full name")
        .required("Full Name is required"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
        .required("Email is required"),
      projectType: Yup.string()
        .matches(/^[A-Za-z\s\-,\.\/]+$/, "Invalid project type format")
        .required("Project Type is required"),
      // mobile: Yup.string()
      // .matches(
      //   /^(\+\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[\d\s-]+$/,
      //   'Invalid phone number format'
      // )
      // .required('Mobile is required')
      // .length(10, 'Please enter valid mobile number'),
      // mobile: Yup.string()
      // .matches(
      //   /^(\+\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[\d\s-()+]+$/,
      //   'Invalid phone number format'
      // )
      // .required('Mobile is required')
      // .min(5, 'Please enter a valid phone number')

      //   mobile: Yup.string()
      // .required('Mobile is required')
      // .test('phone-number', 'Invalid phone number format', (value) => {
      //   if (!value) return true; // Allow empty value
      //   return /^\+?[1-9]\d{1,14}$/.test(value);
      // }),
      mobile: Yup.string()
        .required("Mobile is required")
        .test("phone-number", "Invalid phone number format", (value) => {
          if (!value) return true; // Allow empty value
          // Regular expression for Indian mobile numbers
          const indianMobileRegex = /^[6-9]\d{9}$/;
          // Regular expression for international phone numbers
          const internationalPhoneRegex =
            /^(\+\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[\d\s-()+]+$/;
          return (
            indianMobileRegex.test(value) || internationalPhoneRegex.test(value)
          );
        }),
    }),

    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      console.log(values);
      dispatch(submitForm(values));

      const updatedBody =
        "fullName: " +
        values.fullName +
        "\nemail: " +
        values.email +
        "\nprojectType: " +
        values.projectType +
        "\nmobile: " +
        values.mobile +
        "\nmessage: " +
        values.message;

      console.log("updatedBody...", updatedBody);

      const formattedBody = updatedBody.replace(/\n/g, "<br/>");

      const config = {
        SecureToken: "2b9447bf-264f-4765-bc13-474d1200ce32",
        To: `priyanka@metalok.io`,
        From: "kyyte@kyyte.io",
        Subject: "Demo Subject For Kyyte Contact Form",
        Body: "Body:<br/>" + formattedBody,
      };
      if (window.Email) {
        window.Email.send(config)
          // .then((message) => {
          //   alert("Email sent successfully", message);
          // })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      }

      // Create a transport object
      setShowSuccessMessage(true);
      // resetForm();
      setTimeout(() => {
        setShowSuccessMessage(false);
        dispatch(resetForm());
      }, 2000);
    },
  });
  // ended here

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind? Connect with us."
              subtitle="Get in Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={formik.handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  Full Name<span className="important-color-contact">*</span>
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="error_name">{formik.errors.fullName}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  Email<span className="important-color-contact">*</span>
                </label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error_name">{formik.errors.email}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  Project Type<span className="important-color-contact">*</span>
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="projectType"
                  value={formik.values.projectType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                />
                {formik.touched.projectType && formik.errors.projectType && (
                  <div className="error_name">{formik.errors.projectType}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  Mobile<span className="important-color-contact">*</span>
                </label>

                <PhoneInput
                  country="IN" // Set the default country code
                  value={formik.values.mobile}
                  onChange={(value) => formik.setFieldValue("mobile", value)}
                  onBlur={formik.handleBlur}
                  className="cs-form_field"
                  autoComplete="off"
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="error_name">{formik.errors.mobile}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">
                  Message
                </label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="error_name">{formik.errors.message}</div>
                )}
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type="submit">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
              {showSuccessMessage && (
                <div className="success_message">
                  Form submitted successfully!
                </div>
              )}
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.404002885743!2d78.38213927925518!3d17.44036704079794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9103e43b2e99%3A0xaedd60187e370e80!2sMetalok%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1686029590808!5m2!1sen!2sin"></iframe>
        {/* <GoogleMap
          center={location}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          <Marker position={location} />
        </GoogleMap> */}
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
