import React from "react";
import { useEffect } from "react";
import "./Home.css";
import ScrollAnimation from "./ScrollAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

import homeimg from "../images/home-img.png";
import homeimg1 from "../images/home-img1.png";
import home1 from "../images/1.png";
import home2 from "../images/2.png";
import home3 from "../images/3.png";
import home4 from "../images/4.png";
import home5 from "../images/5.png";
import abtgif from "../images/Abt-Gif.gif";
import WD from "../images/WD.png";
import DS from "../images/DS.png";
import ERP from "../images/ERP.png";
import SMM from "../images/SMM.png";
import DM from "../images/DM.png";
import layer1 from "../images/layer-1.png";
import layer2 from "../images/layer-2.png";
import temp1 from "../images/temp-1.jpeg";
import temp2 from "../images/temp-2.png";
import temp3 from "../images/temp-3.jpeg";
import mission from "../images/mission.png";
import vision from "../images/vision.png";
import foundation from "../images/foundation.png";
import core from "../images/core.png";
import logo1 from "../images/vcge.png";
import logo2 from "../images/eMart Logo PNG.png";
import logo3 from "../images/Emayam-Logo.png";
import art1 from "../images/art-1.png";
import art2 from "../images/art-2.png";
import art3 from "../images/art-3.png";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <ScrollAnimation />
      {/* Header Page Starts */}
      <header>
        <div className="h-container">
          <img
            className="img"
            src={homeimg}
            width="100px"
            height="100px"
            alt=""
          ></img>
          <div className="h-box">
            <h1 className="anim">Innovative IT Solutions</h1>
            <h1 className="anim anim1">for Modern Businesses</h1>
            <div className="cta anim">
              <a className="book-call" href="./Contact">
                Book A Call
              </a>
              <a href="./About" className="learn-more anim">
                Learn More
              </a>
            </div>
          </div>
          <img
            className="img1"
            src={homeimg1}
            width="100px"
            height="100px"
            alt=""
          ></img>
        </div>
        <div className="h-image"></div>
        <div className="service-container ">
          <div className="box-cont">
            <div className="serv-box anim">
              <img src={home1} alt=""></img>
              <p>Web Development</p>
            </div>
            <div className="serv-box anim">
              <img src={home3} alt=""></img>
              <p>Enterprise Resource Management</p>
            </div>
            <div className="serv-box anim">
              <img src={home4} alt=""></img>
              <p>Data Server</p>
            </div>
            <div className="serv-box anim">
              <img src={home2} alt=""></img>
              <p>Social Media Management</p>
            </div>
            <div className="serv-box anim">
              <img src={home5} alt=""></img>
              <p>Digital Marketing Tools</p>
            </div>
          </div>
        </div>
      </header>
      {/* Header Page Ends */}
      {/* About Page Starts */}
      <div className="about">
        <h1 data-aos="fade-up">Crafting Your Digital Success Story</h1>
        <div className="abt-container">
          <div className="abt-img">
            <img src={abtgif} width="650px" alt="about-img1" />
          </div>
          <div className="abt-text" data-aos="fade-up">
            <p>
              Emayamtech is where innovation meets excellence in web solutions.
              With us, you&apos;ll find a team dedicated to elevating your
              online presence through tailored services designed to meet your
              unique needs. From stunning website designs to seamless e-commerce
              integration and robust web applications, we&apos;re committed to
              transforming your digital vision into reality.
              <br />
              <br />
              Our mission is clear: to revolutionize the digital landscape
              through innovative web solutions, empowering businesses to thrive
              in today&apos;s ever-evolving digital age. We envision ourselves
              as the premier provider of cutting-edge web solutions, recognized
              globally for our creativity, reliability, and unwavering
              commitment to the success of our clients.
              <br />
              <br />
              At the core of Emayamtech lies a foundation built on tech passion,
              excellence, and customer satisfaction. We value enduring
              partnerships, fostering growth, and making a positive digital
              impact. With Emayamtech, you&apos;re not just a client;
              you&apos;re a partner in our journey towards digital greatness.
              Let&apos;s embark on this journey together and create something
              truly extraordinary.
              <a href="./About">CONNECT WITH US</a>
            </p>
          </div>
          <div className="abt-box"></div>
        </div>
      </div>
      {/* About Page ends */}
      {/* Service Page Starts */}
      <div className="service">
        <h1 data-AOS="fade-up">Our comprehensive IT Services</h1>
        <div className="serv-container">
          <div className="container container-1" data-AOS="fade-up">
            <div className="box box-1">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="img-container">
                      <img src={WD} alt=""></img>
                      <h3>WEB DEVELOPMENT</h3>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-back">
                      <h3>WEB DEVELOPMENT</h3>
                      <p>
                        Our web development services are designed to meet the
                        needs of your business. We offer a wide range of web
                        development services, including web design, web
                        development, and web hosting.
                      </p>
                      <p>
                        <a href="./Services">READ MORE</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box box-2">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="img-container">
                      <img src={ERP} alt=""></img>
                      <h3>ENTERPRISE RESOURCE MANAGEMENT</h3>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-back">
                      <h3>ENTERPRISE RESOURCE MANAGEMENT</h3>
                      <p>
                        Our comprehensive ERP solutions integrate various
                        functions, including accounting, human resources,
                        inventory management, and more, into a centralized
                        system.
                      </p>
                      <a href="./Services">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box box-3">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="img-container">
                      <img src={DS} alt=""></img>
                      <h3>DATA SERVER</h3>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-back">
                      <h3>DATA SERVER</h3>
                      <p>
                        Our secure and reliable data servers provide a robust
                        infrastructure for storing and accessing your valuable
                        information. Whether you&apos;re a small startup or a
                        large enterprise.
                      </p>
                      <a href="./Services">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-2" data-AOS="fade-up">
            <div className="box box-4">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="img-container">
                      <img src={SMM} alt=""></img>
                      <h3>SOCIAL MEDIA MANAGEMENT</h3>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-back">
                      <h3>SOCIAL MEDIA MANAGEMENT</h3>
                      <p>
                        Our SMM services encompass strategic content creation,
                        community engagement, and targeted advertising across
                        popular platforms such as YouTube, LinkedIn, Facebook,
                        and Instagram.
                      </p>
                      <a href="./Services">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box box-4">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="img-container">
                      <img src={DM} alt=""></img>
                      <h3>DIGITAL MARKETING TOOLS</h3>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-back">
                      <h3>DIGITAL MARKETING TOOLS</h3>
                      <p>
                        Reach your audience where they are with our
                        comprehensive digital marketing solutions. From
                        strategic WhatsApp campaigns to engaging email blasts
                        and insightful data scraping services, we &APOS; ve got
                        you covered.
                      </p>
                      <a href="./Services">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Page Ends */}
      {/* Book and appointment starts */}
      <div className="book">
        <div className="book-contain">
          <div className="book-img" data-AOS="fade-up">
            <img className="bok-img" src={layer1} alt="" ></img>
            <img className="bok-img" src={layer2} alt="" ></img>
          </div>
          <div className="book-content" data-AOS="fade-up">
            <h1 className="book-clr" data-AOS="fade-up">
              Step into the Future
            </h1>
            <p className="book-clr" data-AOS="fade-up">
              Ready to take the next step towards digital success? Book an
              appointment with Emayamtech today and let us help you unleash the
              power of innovative web solutions tailored to your unique needs.
              <br />
              <br />
              Elevate your online presence, revolutionize your digital
              landscape, and build something extraordinary together. Schedule
              your appointment now and embark on a journey towards unparalleled
              creativity, reliability, and client success!
            </p>
            <a href="./Contact" className="book-clr">
              Book An Appointment
            </a>
          </div>
        </div>
      </div>
      {/* Book and appointment ends */}
      {/* Template starts */}
      <div className="template-containers">
        <h1 data-AOS="fade-up">Explore Our Portfolio</h1>
        <div className="templat">
          <div className="temp" data-AOS="fade-up">
            <img src={temp1} className="temp-img" alt=""></img>
          </div>
          <div className="temp" data-AOS="fade-up">
            <img src={temp2} className="temp-img" alt=""></img>
          </div>
          <div className="temp" data-AOS="fade-up">
            <img src={temp3} className="temp-img" alt=""></img>
          </div>
        </div>
        <a href="./Resources" className="a">
          View More
        </a>
      </div>
      {/* Template ends */}

      {/* mission starts */}
      <div className="mission line-height">
        <h1 data-AOS="fade-up">DEFINING OUR PURPOSE</h1>
        <div className="mission-container">
          <div className="mission-1" data-AOS="fade-up">
            <img src={mission} alt=""></img>
            <h2>Mission</h2>
            <p>
              Revolutionize the digital landscape through innovative web
              solutions, empowering businesses to thrive in the digital age
            </p>
          </div>
          <div className="mission-1" data-AOS="fade-up">
            <img src={vision} alt=""></img>
            <h2>Vision</h2>
            <p>
              To be the premier provider of cutting-edge web solutions,
              recognized globally for our creativity, reliability, and
              commitment to client success.
            </p>
          </div>
          <div className="mission-1" data-AOS="fade-up">
            <img src={foundation} alt=""></img>
            <h2>Foundation</h2>
            <p>
              At emayamtech we&apos;re driven by tech passion, committed to
              excellence, and dedicated to customer satisfaction.{" "}
            </p>
          </div>
          <div className="mission-1" data-AOS="fade-up">
            <img src={core} alt=""></img>
            <h2>Our Core Values</h2>
            <p> Enduring partnerships, growth, and positive digital impact.</p>
          </div>
        </div>
      </div>

      {/* mission ends */}
      {/* partners start */}
      <div className="partners line-height">
        <h1 data-AOS="fade-up">OUR PARTNER</h1>
        <p data-AOS="fade-up">
          At EmayamTech, we deeply value the relationships we have with our
          partners. We believe in the power of collaboration and recognize that
          our success is intricately tied to the success of our partners.{" "}
        </p>
        <div className="partner-box" data-AOS="fade-up">
          <div className="partner-1">
            <a href="https://www.vconnectexperts.com/">
              <img src={logo1} width={"160px"} alt=""></img>
            </a>
          </div>
          <div className="partner-1">
            <a href="https://www.emartxpress.in/">
              <img src={logo2} width={"220px"} alt=""></img>
            </a>
          </div>
          <div className="partner-1">
            <a href="https://emayammart.com/">
              <img src={logo3} width={"220px"} alt=""></img>
            </a>
          </div>
        </div>
      </div>
      {/* partners ends */}
      {/* Latest starts */}
      <div className="latest line-height">
        <h1>LATEST NEWS</h1>
        <div className="latest-container">
          <div className="latest-news">
            <a href="article-1">
              <img src={art1} alt=""></img>
            </a>
            <p className="date">15/05/2024</p>
            <a href="article-1">
              <h4>lorem ipsum dolar amet</h4>
            </a>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="latest-news">
            <a href="article-2">
              <img src={art2} alt=""></img>
            </a>
            <p className="date">15/05/2024</p>
            <a href="article-2">
              <h4>lorem ipsum dolar amet</h4>
            </a>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="latest-news">
            <a href="article-3">
              <img src={art3} alt=""></img>
            </a>
            <p className="date">15/05/2024</p>
            <a href="article-3">
              <h4>lorem ipsum dolar amet</h4>
            </a>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      {/* Latest ends */}
    </div>
  );
}

export default Home;
