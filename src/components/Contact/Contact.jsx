import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Background from "../Background/Background";

const Contact = () => {
  const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY
    const TEMPLATE_KEY = process.env.REACT_APP_TEMPLATE_KEY
    const TO_NAME = process.env.REACT_APP_TO_NAME
    const TO_EMAIL = process.env.REACT_APP_TO_EMAIL
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        {
          from_name: form.name,
          to_name: TO_NAME,
          from_email: form.email,
          to_email: TO_EMAIL,
          message: form.message,
        },
        "bOwJZJ5kDWa-IxDt0"
      )
      .then(
        (result) => {

          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Background />
      <div className="contact__container">
        <div className="contact__title">Contact Me</div>
        <div className="contact__form">
          <form onSubmit={sendEmail}>
            <label className="contact__label">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="What's your name?"
              className="contact__input"
              required
            />
            <label className="contact__label">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              name="email"
              className="contact__input"
              required
            />
            <label className="contact__label">Message</label>
            <textarea
              className="contact__textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              name="message"
              required
            />
            <input type="submit" value="Send" className="contact__button" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
