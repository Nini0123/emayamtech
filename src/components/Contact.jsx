import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import locationImg from "../images/location.png";
import emailImg from "../images/email.png";
import phoneImg from "../images/phone.png";
import contactImg from "../images/w5.png";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObject = {};
    if (!firstName) {
      errorObject.firstName = "First name is required";
    } else if (!/^[A-Za-z]{2,}$/i.test(firstName)) {
      errorObject.firstName = "Invalid name";
    }
    if (!lastName) {
      errorObject.lastName = "Last name is required";
    } else if (!/^[A-Za-z]{2,}$/i.test(lastName)) {
      errorObject.lastName = "Invalid name";
    }
    if (!email) {
      errorObject.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errorObject.email = "Invalid email address";
    }
    if (!phone) {
      errorObject.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errorObject.phone = "Invalid phone number format";
    }
    if (!subject) {
      errorObject.subject = "Subject is required";
    }
    if (!message) {
      errorObject.message = "Message is required";
    }
    setErrors(errorObject);
    if (Object.keys(errorObject).length === 0) {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("subject", subject);
      formData.append("message", message);

      const url = "http://localhost/submit.php";
      axios
        .post(url, formData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));

      const webAppUrl =
        "https://script.google.com/macros/s/AKfycbxt9bhEOz3g01awWypbRHcXIxMEGrMWrwkDG48yv70uq3q57mCGF3Sjpyy04I-M6ipf/exec";

      fetch(webAppUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) =>
          alert("Thanks for Contacting us..! We Will Contact You Soon...")
        )
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <div className="App">
      <div className="h">
        <h1 style={{ textAlign: "center", color: "white" }}> CONTACT US</h1>
      </div>
      <Iframe />
      <ContactSection />
      <Form
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        subject={subject}
        message={message}
        errors={errors}
        handleSubmit={handleSubmit}
        handleInputChange={(e) => {
          const { name, value } = e.target;
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
          switch (name) {
            case "firstName":
              setFirstName(value);
              break;
            case "lastName":
              setLastName(value);
              break;
            case "email":
              setEmail(value);
              break;
            case "phone":
              setPhone(value);
              break;
            case "subject":
              setSubject(value);
              break;
            case "message":
              setMessage(value);
              break;
            default:
              break;
          }
        }}
      />
    </div>
  );
}

function Iframe() {
  return (
    <div className="iframe">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.049256255833!2d80.2481!3d12.9687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6b25014c2d%3A0x60b2a36838a08aba!2sRegus%20-%20Chennai%2C%20Prince%20Infocity%20I!5e0!3m2!1sen!2sin!4v1713942253277!5m2!1sen!2sin"
        width="1200"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function ContactSection() {
  return (
    <div className="contact-section">
      <ContactBox
        img={locationImg}
        title="EMAYAM TECHNOLOGIES"
        address="Unit No.1, 1st Floor, PRINCE INFO CITY-II,OMR, Nehru Nagar, Perungudi,Chennai, Tamil Nadu-600096, India"
      />
      <ContactBox
        img={emailImg}
        title="afreenhussain@gmail.com"
        address="Email your query"
      />
      <ContactBox
        img={phoneImg}
        title="9352789250"
        address="Monday-Saturday , 9am-7pm"
      />
    </div>
  );
}

function ContactBox({ img, title, address }) {
  return (
    <div className="contact-box">
      <center>
        <img src={img} alt="" />
        <br></br>
      </center>
      <p
        style={{
          textShadow: "2px 2px 2px black",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        <b>{title}</b>
      </p>
      <p style={{ textShadow: "2px 2px 2px black", textAlign: "center" }}>
        {address}
      </p>
    </div>
  );
}

function Form({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
  errors,
  handleSubmit,
  handleInputChange,
}) {
  return (
    <div className="form">
      <div className="send">
        <label htmlFor="send">Send Message</label>
      </div>
      <form onSubmit={handleSubmit} method="post" name="google-sheet">
        <table>
          <tbody>
            <tr>
              <td rowSpan="4">
                <img src={contactImg} id="img" alt="Contact" width={500} />
              </td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                />
                <br />
                <span style={{ color: "red" }}>{errors.firstName}</span>
                <br />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                />{" "}
                <br />
                <span style={{ color: "red" }}>{errors.lastName}</span>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                />
                <br />
                <span style={{ color: "red" }}>{errors.email}</span>
                <br />
              </td>
              <td>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                />
                <br />
                <span style={{ color: "red" }}>{errors.phone}</span>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                />
                <br />
                <span style={{ color: "red" }}>{errors.subject}</span>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="5"
                  cols="5"
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                ></textarea>
                <br />
                <span style={{ color: "red" }}>{errors.message}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <br />
                <div className="button1">
                  <button className="but" type="submit" name="submit">
                    {" "}
                    Submit{" "}
                  </button>
                  <span style={{ color: "red" }}>{errors.submit}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Contact;
