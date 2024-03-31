import React from "react";
import styles from "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="sectionHeading" data-aos="fade-in">
          <h1 className="gradient font-semibold">GET IN TOUCH</h1>
          <div className="less_contact">
            We are here to answer any questions you may have.
          </div>
        </div>
        <div className="contactWrapper">
          <form action="">
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Name"
              autoComplete="off"
              data-aos="zoom-out"
            />
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Email ID"
              autoComplete="off"
              data-aos="zoom-out"
            />
            <input
              type="text"
              name="discordId"
              className="discordId"
              placeholder="Discord ID"
              autoComplete="off"
              data-aos="zoom-out"
            />
            <input
              type="text"
              name="orderId"
              className="name"
              placeholder="Order ID"
              autoComplete="off"
              data-aos="zoom-out"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              autoComplete="off"
              data-aos="zoom-out"
            ></textarea>
            <button data-aos="zoom-out" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
