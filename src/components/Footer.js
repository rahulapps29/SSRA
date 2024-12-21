import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 SSRA & Company. All Rights Reserved.</p>
      <p style={{ margin: "5px 0" }}>
        Call us:{" "}
        <a
          href="tel:+918750654131"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          +91-875065-4131
        </a>{" "}
        | Email:{" "}
        <a
          href="mailto:chandankumar0879@gmail.com"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          chandankumar0879@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
