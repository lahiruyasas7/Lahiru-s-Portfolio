'use client'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//const ContactForm = () => {
function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        resetForm();
      } else {
        alert("Failed to send email.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto p-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 mb-2 border"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name && (
        <p className="text-red-500">{formik.errors.name}</p>
      )}

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 mb-2 border"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500">{formik.errors.email}</p>
      )}

      <input
        type="text"
        placeholder="Subject"
        className="w-full p-2 mb-2 border"
        {...formik.getFieldProps("subject")}
      />
      {formik.touched.subject && formik.errors.subject && (
        <p className="text-red-500">{formik.errors.subject}</p>
      )}

      <textarea
        placeholder="Your Message"
        className="w-full p-2 mb-2 border"
        rows={4}
        {...formik.getFieldProps("message")}
      />
      {formik.touched.message && formik.errors.message && (
        <p className="text-red-500">{formik.errors.message}</p>
      )}

      <button type="submit" className="w-full p-2 bg-blue-500 text-white">
        Send Email
      </button>
    </form>
  );
}

export default ContactForm;
