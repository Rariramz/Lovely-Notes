import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFeatherAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="footer-logo">
        VITA <FaFeatherAlt />
      </Link>
      <div className="social-media">
        <Link
          className="social-icon-link"
          to="/"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook />
        </Link>
        <Link
          className="social-icon-link"
          to="/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>
        <Link
          className="social-icon-link"
          to="/"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter />
        </Link>
        <Link
          className="social-icon-link"
          to="/"
          target="_blank"
          aria-label="Youtube"
        >
          <FaYoutube />
        </Link>
        <Link
          className="social-icon-link"
          to="/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
