import { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import React from "react";
import { requestedUrl } from "../utils";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);
 const [{ name, email, message }, setContact] = useState(initialState);

 const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // ✅ Validation Functions
  const validateName = (value) => {
    if (!value.trim()) return "Name is required.";
    if (value.length < 3) return "Name must be at least 3 characters.";
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email is required.";
    if (!emailRegex.test(value)) return "Enter a valid email address.";
    return "";
  };

  const validateMessage = (value) => {
    if (!value.trim()) return "Message cannot be empty.";
    if (value.length < 10) return "Message should be at least 10 characters.";
    return "";
  };
 const templateParams={
  name:name,
  email:email,
  message:message,
  to_name:"Vaishnavi Mishra",
  to_email:"mvaishnavi551@gmail.com"
 }

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    let error = "";
    if (name === "name") error = validateName(value);
    if (name === "email") error = validateEmail(value);
    if (name === "message") error = validateMessage(value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  // const clearState = () => setState({ ...initialState });


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, message);

    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    // const res = await axios.post(requestedUrl + "/contactus", contact)
    // console.log(res)
     const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      Swal.fire({
        title: "Validation Error",
        text: "Please correct the highlighted fields.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    emailjs
      .send("service_r9ezjur", "template_nijlmry", templateParams, "rHXJXHtx8kSf5a9b6")
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          console.log(result.text);
          setContact(initialState);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong, please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };
  return (
    <><div id="contact" style={{ background: "black" }}>
      <div className="container">
        <div className="row">
          {/* Left side form */}
          <div className="col-md-8">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will get
                back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3" >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      required
                      onChange={handleChange}
                    />
                  {errors.name && (
                        <p className="help-block text-danger">{errors.name}</p>
                      )}
                  </div>
                  
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      required
                      onChange={handleChange}
                    />
                    {errors.email && (
                        <p className="help-block text-danger">{errors.email}</p>
                      )}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  value={message}
                  required
                  onChange={handleChange}
                ></textarea>
               {errors.message && (
                    <p className="help-block text-danger">{errors.message}</p>
                  )}
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Right side contact info */}
          <div className="col-md-4 contact-info">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="col-md-12">
          <div className="social">
            <ul>
              <li>
                <a href={props.data ? props.data.facebook : "/"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.twitter : "/"}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.youtube : "/"}>
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Hanuman Art. Design by{" "}
          </p>
        </div>
      </div>
    </>

  );
};
