import React, { useRef } from "react";
import { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AboutImage from "../images/remove.png";
import partner1 from "../images/Partner1.png";
import partner2 from "../images/Partner2.png";
import partner3 from "../images/Partner3.png";
import partner4 from "../images/Partner4.png";
import partner5 from "../images/Partner5.jpg";
import { FaRegLightbulb } from "react-icons/fa";
import { CgCheck } from "react-icons/cg";
import { GiBurningEye } from "react-icons/gi";
import { GiFoundryBucket } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import tech from "../images/tech.png";
import soft from "../images/soft.png";
import time from "../images/time.png";
import creative from "../images/creative.png";
import adaptability from "../images/adaptability.png";
import details from "../images/details.png";
import critical from "../images/critical.png";
import teamwork from "../images/teamwork.png";


const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className=" w-full h-full">
      {/* Hero  */}

      <div className="h-screens pt-20">
        <div className="lg:flex items-center justify-center p-5 hidden md:block ">
          <div className=" bg-slate-400 p-5 text-center">
            <h1 className="text-5xl font-mono awesome anim">
              <span>J</span>
              <span>O</span>
              <span>I</span>
              <span>N</span>
              <span>O</span>
              <span>U</span>
              <span>R</span>
              <span>T</span>
              <span>E</span>
              <span>A</span>
              <span>M</span>
            </h1>
          </div>
        </div>
        <div className="lg:flex items-center justify-center mt-18">
          <p className="text-4xl font-serif font-medium anim">
            Empowering businesses to thrive in the digital world
          </p>
        </div>
        <div className="lg:flex items-center justify-center">
          <p className="text-4xl font-serif font-medium anim">
            through innovative website marketing solutions.
          </p>
        </div>
      </div>

      {/* IT SOlution */}
      <div className=" bg-black w-full min-h-[600px] lg:flex items-center justify-center gap-5">
        <div className="w-full p-10 ml-2 items-center">
          <div className="flex items-center justify-center pt-2">
            <h1 className="lg:text-4xl font-serif slide_down">IT SOLUTIONS</h1>
          </div>
          <div className=" items-center">
            <p className="p-4 text-md slide_right anim1">
              Welcome to EmayamTech, where innovation meets excellence in IT
              solutions. We specialize in delivering cutting-edge web solutions
              designed to propel your business into the digital future. Our
              services range from custom web development and responsive design
              to robust e-commerce platforms and scalable cloud solutions.
            </p>
            <p className="text-md p-4 slide_left anim1">
              At EmayamTech, we are committed to understanding your unique
              business needs and crafting bespoke solutions that ensure
              efficiency, precision, and impactful results. Our expert team of
              developers, designers, and IT professionals work collaboratively
              to create seamless digital experiences that not only meet but
              exceed your expectations.
            </p>
            <p className="text-md p-4 anim anim1">
              Join us on a journey of transformation and success. Discover the
              future of technology with EmayamTech, where your vision meets our
              expertise to create extraordinary digital solutions. Let's build
              something exceptional together.
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <img
            src={AboutImage}
            alt=""
            className="object-cover bg-blend-multiply slide_right anim1"
          />
        </div>
      </div>

      {/* Why choose us */}

      <div className="bg-black w-full h-full p-10">
        <div className="flex justify-center items-center">
          <h1 className="lg:text-5xl anim anim1">Why Choose Us</h1>
        </div>
        <div className="lg:flex  justify-between mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full h-full cursor-pointer anim2 anim">
          <div className="background w-full h-full mt-2 cursor-pointer p-2 border rounded-[25px]">
            <div className=" rounded-full border-4 border-white w-20 h-20 ">
              <FaRegLightbulb className="mx-auto mt-5 text-4xl" />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-bold  font-serif ">Mission</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className=" text-xl font-bold p-1 font-serif ">
                Empowering Tomorrow
              </h1>
            </div>
            <div className="flex mt-3 items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Empowering Visionary Entrepreneurial Innovation.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">Empower Future Leaders.</p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Catalyst for Change,Tomorrow.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Focus on providing resources.
              </p>
            </div>
            {/* <div className=' rounded-full border-none text-center p-2 mt-2 bg-[#a53892] hover:bg-gradient-to-t  from-cyan-500 to-blue-600 '>
                      View More
                   </div> */}
          </div>

          <div className=" background w-full h-full mt-2 cursor-pointer p-2 border rounded-[25px]">
            <div className=" rounded-full border-4 border-white w-20 h-20 ">
              <GiBurningEye className="mx-auto mt-5 text-4xl " />
            </div>
            <div className="flex items-center justify-center ">
              <h1 className="text-xl font-bold  font-serif ">Vision</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className=" text-xl font-bold p-1 font-serif">
                Inspiring Tomorrow
              </h1>
            </div>
            <div className="flex mt-3 items-center">
              <CgCheck className="text-4xl items-center " />
              <p className="text-md font-medium">
                Dreaming, Innovating, Leading, Transforming
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">Guiding Progress.</p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">Bold Vision,Bright Future.</p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">Creating Futures.</p>
            </div>
            {/* <div className=' rounded-full border-none text-center p-2 mt-2 bg-[#a53892] hover:bg-gradient-to-t  from-cyan-500 to-blue-600 '>
                      View More
                   </div> */}
          </div>

          <div className=" background w-full h-full  mt-2 cursor-pointer p-2 border rounded-[25px]">
            <div className=" rounded-full border-4 border-white w-20 h-20 ">
              <GiFoundryBucket className="mx-auto mt-5 text-4xl " />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-bold  font-serif ">Foundation</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className=" text-xl font-bold p-1 font-serif">
                Building Stronger
              </h1>
            </div>
            <div className="flex mt-3 items-center">
              <CgCheck className="text-4xl items-center " />
              <p className="text-md font-medium">
                Empowering Lives, Creating Hope.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Building Tomorrow, Today’s Foundations.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Solid Principles, Lasting Impact.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Visionary Ideas, Strong Ethics.
              </p>
            </div>
            {/* <div className=' rounded-full border-none text-center p-2 mt-2 bg-[#a53892] hover:bg-gradient-to-t  from-cyan-500 to-blue-600 '>
                      View More
                   </div> */}
          </div>

          <div className=" background w-full h-full mt-2 cursor-pointer p-2 border rounded-[25px]">
            <div className=" rounded-full border-4 border-white w-20 h-20 ">
              <GrUserExpert className="mx-auto mt-5 text-4xl" />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-bold  font-serif ">Expertise</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className=" text-xl font-bold p-1 font-serif">
                Masters of our Craft
              </h1>
            </div>
            <div className="flex mt-3 items-center">
              <CgCheck className="text-4xl items-center " />
              <p className="text-md font-medium">
                Innovation, Proficiency, Mastery, Excellence.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Cutting-edge Technology Mastery.
              </p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">Proven Strategic Guidance.</p>
            </div>
            <div className="flex items-center">
              <CgCheck className="text-4xl" />
              <p className="text-md font-medium">
                Unwavering Commitment to Excellence.
              </p>
            </div>
            {/* <div className=' rounded-full border-none text-center p-2 mt-2 bg-[#a53892] hover:bg-gradient-to-t  from-cyan-500 to-blue-600 '>
                      View More
                   </div> */}
          </div>
        </div>
      </div>

      {/* Our Partners */}

      <div className="part-box line-height">
        <h1 data-aos="fade-up">Our Leadership Team</h1>
        <div className="relative">
          <button className="slider-button left" onClick={scrollLeft}>
            <FaAngleLeft />
          </button>
          <div className="part-container" ref={sliderRef} data-aos="fade-up">
            <div className="part-news  first-news">
              <a href="https://www.linkedin.com/in/jpemayam/" target="_blank">
                <img src={partner1} alt="JP Subramani" />
              </a>
              <a href="https://www.linkedin.com/in/jpemayam/" target="_blank">
                <h4>Jayaprakash (JP) Subramani</h4>
              </a>
              <p>Founder & CEO</p>
            </div>
            <div className="part-news">
              <img src={partner2} alt="Jayanthi Prakash" />

              <h4>Jayanthi Prakash</h4>
              <p>Managing Director</p>
            </div>
            <div className="part-news">
              <img src={partner3} alt="Priya Krish" />

              <h4>Priyadharshini Dhandapani</h4>

              <p>Director & Project Manager</p>
            </div>
            <div className="part-news">
              <img src={partner4} alt="Priyadharshini Dhandapani" />

              <h4>Priya Krish</h4>

              <p>Co-Founder & GM</p>
            </div>
            <div className="part-news">
              <a href="https://www.linkedin.com/in/nihaa-fathima-4b2303245" target="_blank">
                <img src={partner5} alt="Nihaa Fathima" />
              </a>
              <a href="https://www.linkedin.com/in/nihaa-fathima-4b2303245" target="_blank">
                <h4>Nihaa Fathima</h4>
              </a>
              <p>Project Manager</p>
            </div>
          </div>
          <button className="slider-button right" onClick={scrollRight}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* Our Company Skills */}

      <div className="  w-full h-full p-10">
        <div className=" mx-auto container">
          <div className="flex items-center justify-center">
            <h1 className="lg:text-5xl font-bold anim3 anim">
              Our Company Skills
            </h1>
          </div>
        </div>
        <div className="mt-10 w-full h-full p-5 px-3 lg:flex anim anim4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full cursor-pointer  ">
            <div className="card flex-col p-5 rounded-md ">
              <div className="flex items-center justify-center ">
                <img src={tech} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Technical Skills
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  Proficiency in specific technical areas relevant to the job or
                  industry.
                </p>
              </div>
            </div>
            <div className=" card flex-col p-5 rounded-md">
              <div className="flex items-center justify-center">
                <img src={soft} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Communication Skills
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  Effective verbal and written communication.
                </p>
              </div>
            </div>
            <div className=" card flex-col p-5  rounded-md">
              <div className="flex items-center justify-center">
                <img src={time} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Time Management
              </h1>
              <div className="">
                <p className="text-center text-md  mt-2 text-black">
                  {" "}
                  Efficiently managing time and prioritizing tasks.
                </p>
              </div>
            </div>
            <div className="card flex-col p-5  rounded-md">
              <div className="flex items-center justify-center">
                <img src={creative} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif  mt-10 text-black">
                Creativity
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  Ability to think creatively and generate innovative ideas.
                </p>
              </div>
            </div>
            <div className="card flex-col p-5  rounded-md">
              <div className="flex items-center justify-center">
                <img
                  src={adaptability}
                  alt=""
                  width={100}
                  className="move-anim"
                />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Adaptability
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  {" "}
                  Flexibility to adapt to changing circumstances and
                  environments.
                </p>
              </div>
            </div>
            <div className="card flex-col p-5  rounded-md">
              <div className="flex items-center justify-center">
                <img src={details} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Attention to Detail
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  Thoroughness and accuracy in completing tasks.
                </p>
              </div>
            </div>

            <div className="card flex-col p-5 rounded-md">
              <div className="flex items-center justify-center">
                <img src={critical} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Critical Thinking
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  Ability to analyze information and make reasoned judgments.
                </p>
              </div>
            </div>

            <div className="card flex-col p-5 rounded-md">
              <div className="flex items-center justify-center">
                <img src={teamwork} alt="" width={100} className="move-anim" />
              </div>
              <h1 className="text-center text-xl font-serif mt-10 text-black">
                Collaboration
              </h1>
              <div className="">
                <p className="text-center text-md mt-2 text-black">
                  Working effectively with others in a team setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
