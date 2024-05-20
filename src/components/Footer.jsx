import './Footer.css'
import fb from "../images/fb.png";
import ins from "../images/in.png";
import lin from "../images/i.png";
import what from "../images/wa.png";

function Footer() {
  return (
    <>
      <footer className="footer line-height">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col footer-col-4">
              <h2>EMAYAM TECHNOLOGIES PRIVATE LIMITED</h2>
              <br />
              <p>Choose Emayamtech for seamless digital solutions</p>
              <br />
              <a href="Contact.jsx" className="btn">
                Request a Quote
              </a>
            </div>
            <div className="footer-col footer-col-2 ">
              <h2>LINKS</h2>
              <ul>
                <li>
                  <a href="Home">Home</a>
                </li>
                <li>
                  <a href="About]">About Us</a>
                </li>
                <li>
                  <a href="Services">Services</a>
                </li>
                <li>
                  <a href="Resources">Resources</a>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-col-3 ">
              <h2>CONTACT US</h2>
              <ul>
                <li>Phone Number: [Insert Phone Number]</li>
                <li>Email Address: [Insert Email Address]</li>
                <li>
                  Address: Unit No.1, 1st Floor, PRINCE INFO CITY-II,
                  <br /> OMR, Nehru Nagar, Perungudi, Chennai,
                  <br /> Tamil Nadu-600096, India
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col-1">
            <h2>CONNECT WITH US:</h2>
            <div className="social-links">
              <a href="facebook">
                <img src={fb} alt=""></img>{" "}
              </a>
              <a href="instagram">
                <img src={ins} alt=""></img>
              </a>
              <a href="whatsapp">
                <img src={what} alt=""></img>{" "}
              </a>
              <a href="linkedin">
                <img src={lin} alt=""></img>{" "}
              </a>
            </div>
          </div>
          <p className="copy-right">
            Emayam Technologies Private Limited © 2023 - All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
