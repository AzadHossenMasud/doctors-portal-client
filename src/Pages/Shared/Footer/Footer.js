import React from "react";
import { Link } from "react-router-dom";
import footerbg from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <div>
      <footer  style={{
        backgroundImage: `url(${footerbg})`,
      }} className="footer p-10 bg-base-200 text-base-content justify-around">
        <div>
          <span className="footer-title uppercase">Services</span>
          <Link to='/' className="link link-hover">Emegency Checkup</Link>
          <Link to='/' className="link link-hover">Monthly Checkup</Link>
          <Link to='/' className="link link-hover">Weekly Checkup</Link>
          <Link to='/' className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title uppercase">Oral Health</span>
          <Link to='/' className="link link-hover">Fluoride Treatment</Link>
          <Link to='/' className="link link-hover">Cavity Filling</Link>
          <Link to='/' className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Our Address </span>
          <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="md:place-self-center md:justify-self-end">
          <div>
            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
