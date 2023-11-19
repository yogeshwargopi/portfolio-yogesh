import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to EmailJS
      await emailjs.send(
        "yogesh_email",
        "yogesh_portfolio_mail_1",
        formData
        //"mq1VG-mzLO5X7c3wM"
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      console.log("Form submitted successfully!");

      // Add logic for successful submission, e.g., display a thank you message
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Add logic for failed submission
    }
  };

  return (
    <div className="contact">
      <div className="contact_container">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <div className="hrtagc"></div>
        <div className="contact_container_full">
          <div className="contact_container_left">
            <div className="contact_container_left_tags">
              <div className="contact_container_left_tags_icon">
                <LocationOnIcon
                  style={{ fontSize: "16px", color: "#5e9e9f" }}
                />
              </div>
              <a>Chengalpattu, Marai Malai Nagar</a>
            </div>
            <div className="contact_container_left_tags">
              <div className="contact_container_left_tags_icon">
                <PhoneIcon style={{ fontSize: "16px", color: "#5e9e9f" }} />
              </div>
              <a>+91 9344382085</a>
            </div>
            <div className="contact_container_left_tags">
              <div className="contact_container_left_tags_icon">
                <MailIcon style={{ fontSize: "16px", color: "#5e9e9f" }} />
              </div>
              <a href="mailto:yogeshwar.gopi.2913@gmail.com">
                yogeshwar.gopi.2913@gmail.com
              </a>
            </div>
            <div className="contact_container_left_tags">
              <div className="contact_container_left_tags_icon">
                <GitHubIcon style={{ fontSize: "16px", color: "#5e9e9f" }} />
              </div>
              <a href="https://github.com/yogeshwargopi">Github.com</a>
            </div>
          </div>
          <div className="contact_container_right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="inputtag"
                required
              />
              <br></br>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
              <br></br>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
