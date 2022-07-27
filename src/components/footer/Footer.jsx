import React from "react";
import "./footer.css";
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Raju Vishwakarma
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

        <div className="footer__socials">
            <a href="https://facebook.com" target='_blank'><BsFacebook/></a>
            <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
            <a href="https://linkedin.com" target='_blank'><FaLinkedinIn/></a>
        </div>
      
        <div className="footer__copyright">
          <small>
            &copy: Raju Tutorials. All right reserve.
          </small>
        </div>
    </footer>
  );
};

export default Footer;
