import React from 'react';
import "./About.css";
import AboutImage from '../images/remove.png'
import partner from '../images/img1.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { CgCheck } from "react-icons/cg";
import { GiBurningEye } from "react-icons/gi";
import { GiFoundryBucket } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import tech from '../images/tech.png'
import soft from '../images/soft.png'
import time from '../images/time.png'
import creative from '../images/creative.png'
import adaptability from '../images/adaptability.png'
import details from '../images/details.png'
import critical from '../images/critical.png'
import teamwork from '../images/teamwork.png'


const About = () => {

  
  return (
    <div className=' w-full h-full'>
      {/* Hero  */}
       

         <div className='h-screen banner pt-20'>
         <div className='lg:flex items-center justify-center container mx-auto max-w-[750px] p-5 border-2 hidden sm:block'>
    <div className=' bg-slate-400 p-2 text-center'>
        <h1 className='text-5xl font-mono awesome'>
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

              <div className='flex items-center justify-center text-white mt-20 max-w-[750px] pl-10'>
                 <p className='text-5xl'>Empowering businesses to thrive in the digital world through innovative website marketing solutions.</p>
              </div>
         </div>   
          
        
      {/* IT SOlution */}
      <div className=' bg-black w-full h-full min-h-[600px] pt-4 flex items-center justify-center'>
           <div className=' lg:flex lg:items-center text-white lg:h-96  pt-20 justify-between container mx-auto gap-2 items-center'>
               <div className='max-w-[900px]'>
                  <div className='items-center pt-2'>
                     <h1 className='text-center text-5xl font-serif'>IT SOLUTIONS</h1>
                     <p className='p-4 text-2xl '>
                          Welcome to emayamtech where innovation meets excellence in web
                          solutions. Elevate your online presence with our tailored services
                          designed to meet your unique needs. From stunning website design
                          to seamless e-commerce integration and powerful web applications,
                          we&apos;re here to transform your digital vision into reality.
                          <br/>Let&apos;s build something extraordinary together.
                     </p>
                  </div>
               </div>
               <div className=' w-full'>                
                   <img src={AboutImage} alt='' className=' w-full h-full object-cover bg-blend-multiply'/>
               </div>


           </div>
      </div>
     
     {/* Why choose us */}

     <div className='bg-black w-full h-full p-10'>
        <div className='text-white mx-auto container'>
            <div className='flex justify-center items-center'>
                <h1 className='text-5xl'>Why Choose Us</h1>
            </div>
        </div>
        <div className='lg:flex justify-between mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full cursor-pointer '>

            <div className=' background  bg-white cursor-pointer p-2 border rounded-[25px]  lg:w-[22%] h-[480px] mt-4 lg:mt-0'>
              
                <div className='w-full flex-col '>
                   <div className=' rounded-full border-4 border-black w-20 h-20 '>
                     <FaRegLightbulb className='mx-auto mt-5 text-4xl ' />
                   </div>
                   <div className='text-center mt-6 '>
                     <h1 className='text-3xl font-bold  font-serif '>Mission</h1>
                     <h1 className=' text-2xl font-bold p-1 font-serif'>Empowering Tomorrow</h1>
                   </div>
                   <div className='mt-6 w-96 h-48 items-center'>
                    <div className='flex'>
                        <CgCheck className='text-4xl items-center ' />
                        <h1 className='text-xl font-medium'>Visionary Ventures</h1>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex'>
                            <CgCheck className='text-4xl items-center '/>
                            <h1 className='text-xl font-medium'>Empower Future Leaders</h1>
                        </div>
                    </div>
                    <div className='flex items-center '>
                       <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium w-full h-full'>Catalyst for Change,Tomorrow.</h1>
                    </div>
                    <div className='flex items-center '>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Focus on providing resources.</h1>
                    </div>
                   </div>
                   <div className='mx-auto container max-w-[150px] border-none rounded-full text-center text-white bg-gradient-to-t  from-cyan-500 to-blue-600  p-2 px-3 '>
                     <button className='text-xl'>View More</button>
                   </div>
                </div>
                
                           
            </div>

                    
            <div className=' background  bg-white cursor-pointer p-2 border rounded-[25px]  lg:w-[22%] h-[480px] mt-4 lg:mt-0'>
              
                <div className='w-full flex-col '>
                   <div className=' rounded-full border-4 border-black w-20 h-20 '>
                     <GiBurningEye className='mx-auto mt-5 text-4xl ' />
                   </div>
                   <div className='text-center mt-6 '>
                     <h1 className='text-3xl font-bold  font-serif '>Vision</h1>
                     <h1 className=' text-2xl font-bold p-1 font-serif'>Inspiring Tomorrow</h1>
                   </div>
                   <div className='mt-6 w-96 h-48 items-center'>
                    <div className='flex'>
                        <CgCheck className='text-4xl items-center ' />
                        <h1 className='text-xl font-medium'>Dreaming, Innovating, Leading, Transforming</h1>
                    </div>
                    <div className='flex items-center'>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Guiding Progress.</h1>
                    </div>
                    <div className='flex items-center '>
                       <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Bold Vision,Bright Future.</h1>
                    </div>
                    <div className='flex items-center '>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Creating Futures.</h1>
                    </div>
                   </div>
                   <div className='mx-auto container max-w-[150px] border-none rounded-full text-center text-white bg-gradient-to-t  from-cyan-500 to-blue-600  p-2 px-3 '>
                     <button className='text-xl '>View More</button>
                   </div>
                </div>
                
                           
            </div>

                    
            <div className=' background  bg-white cursor-pointer p-2 border rounded-[25px]  lg:w-[22%] h-[480px] mt-4 lg:mt-0'>
              
                <div className='w-full flex-col '>
                   <div className=' rounded-full border-4 border-black w-20 h-20 '>
                     <GiFoundryBucket className='mx-auto mt-5 text-4xl ' />
                   </div>
                   <div className='text-center mt-6 '>
                     <h1 className='text-3xl font-bold  font-serif '>Foundation</h1>
                     <h1 className=' text-2xl font-bold p-1 font-serif'>Building Stronger</h1>
                   </div>
                   <div className='mt-6 w-96 h-48 items-center'>
                    <div className='flex'>
                        <CgCheck className='text-4xl items-center ' />
                        <h1 className='text-xl font-medium'>Empowering Lives, Creating Hope.</h1>
                    </div>
                    <div className='flex items-center'>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Investing in Change, Impacting Futures.</h1>
                    </div>
                    <div className='flex items-center '>
                       <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Unity, Compassion, Progress, Strength.</h1>
                    </div>
                    <div className='flex items-center '>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Changing Lives.</h1>
                    </div>
                   </div>
                   <div className='mx-auto container max-w-[150px] border-none rounded-full text-center text-white bg-gradient-to-t  from-cyan-500 to-blue-600  p-2 px-3 '>
                     <button className='text-xl '>View More</button>
                   </div>
                </div>
                
                           
            </div>

                    
            <div className=' background  bg-white cursor-pointer p-2 border rounded-[25px]  lg:w-[22%] h-[480px] mt-4 lg:mt-0'>
              
                <div className='w-full flex-col '>
                   <div className=' rounded-full border-4 border-black w-20 h-20 '>
                     <GrUserExpert className='mx-auto mt-5 text-4xl ' />
                   </div>
                   <div className='text-center mt-6 '>
                     <h1 className='text-3xl font-bold  font-serif '>Expertise</h1>
                     <h1 className=' text-2xl font-bold p-1 font-serif'>Masters of our Craft</h1>
                   </div>
                   <div className='mt-6 w-96 h-48 items-center'>
                    <div className='flex'>
                        <CgCheck className='text-4xl items-center ' />
                        <h1 className='text-xl font-medium'>Skill, Mastery, Excellence.</h1>
                    </div>
                    <div className='flex items-center'>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Innovation, Proficiency, Dedication, Results.</h1>
                    </div>
                    <div className='flex items-center '>
                       <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Years of Experience, Trusted Knowledge.</h1>
                    </div>
                    <div className='flex items-center '>
                        <CgCheck className='text-4xl' />
                        <h1 className='text-xl font-medium'>Expert Insight, Proven Success.</h1>
                    </div>
                   </div>
                   <div className='mx-auto container max-w-[150px] border-none rounded-full text-center text-white bg-gradient-to-t  from-cyan-500 to-blue-600  p-2 px-3 '>
                     <button className='text-xl '>View More</button>
                   </div>
                </div>
                
                           
            </div>
          
        </div>
     </div>

     {/* Our Partners */}
    
      <div className='bg-black w-full h-full p-10'>
          <div className='text-white mx-auto container'>
              <div className='flex items-center justify-center'>
                  <h1 className='text-5xl'>Our Partners</h1>
          </div>
          </div>
          <div className='mt-10 w-full h-full text-white'>
              <div className='lg:flex justify-around p-1 px-3'>

                  <div className='flex justify-around w-full cursor-pointer'>
                    <div className='p-5 lg:flex  gap-10 items-center '>
                      <img src={partner} alt='partner' className=' w-48 h-48 rounded-full hover:scale-90 duration-100 ' />
                      <div className=' max-w-[100px] mx-auto container'>
                        <h1 className='text-xl'>Names</h1>
                        <h1 className='text-xl'>Description</h1>
                         <div className='social-medias pt-2'>
                            <ul className='flex gap-3'>
                                <li className='p-3'><FaLinkedin className='text-3xl text-white'/></li>
                                <li className='p-3'><a href='#Linkedin'><FaGithubSquare className='text-3xl text-white' /></a></li>
                                
                            </ul>
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex justify-around w-full'>
                    <div className='p-5 lg:flex  gap-10 items-center '>
                      <img src={partner} alt='partner' className=' w-48 h-48 rounded-full hover:scale-90 duration-100 ' />
                      <div className=' max-w-[100px] mx-auto container'>
                        <h1 className='text-xl'>Names</h1>
                        <h1 className='text-xl'>Description</h1>
                        <div className='social-medias pt-2'>
                            <ul className='flex gap-3'>
                                <li className='p-3'><FaLinkedin className='text-3xl text-white'/></li>
                                <li className='p-3'><a href='#Linkedin'><FaGithubSquare className='text-3xl text-white' /></a></li>
                                
                            </ul>
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-around w-full'>
                    <div className='p-5 lg:flex  gap-10 items-center '>
                      <img src={partner} alt='partner' className=' w-48 h-48 rounded-full hover:scale-90 duration-100 ' />
                      <div className=' max-w-[100px] mx-auto container'>
                        <h1 className='text-xl'>Names</h1>
                        <h1 className='text-xl'>Description</h1>
                        <div className='social-medias pt-2'>
                            <ul className='flex gap-3 '>
                                <li className='p-3'><FaLinkedin className='text-3xl text-white'/></li>
                                <li className='p-3'><a href='#Linkedin'><FaGithubSquare className='text-3xl text-white' /></a></li>
                                
                            </ul>
                         </div>
                      </div>
                    </div>
                  </div>
                     
                     
                  

              </div>
          </div>
      </div>

    

      {/* Our Company Skills */}

      <div className=' bg-slate-100 w-full h-full p-10 text-black '>
          <div className=' mx-auto container'>
              <div className='flex items-center justify-center'>
                  <h1 className='text-5xl fon'>Our Company Skills</h1>
          </div>
          </div>
          <div className='mt-10 w-full h-full '>
          <div className='p-5 px-3 lg:flex'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full cursor-pointer  '>

                  <div className='card flex-col p-5  w-80 h-80 rounded-md '>
                      <div className='flex items-center justify-center '>
                          <img src={tech} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Technical Skills</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'>Proficiency in specific technical areas relevant to the job or industry.</p>
                      </div>
                  </div>
                  <div className=' card flex-col p-5  h-80 w-80 rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={soft} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Communication Skills</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'>Effective verbal and written communication.</p>
                      </div>
                  </div>
                  <div className=' card flex-col p-5  h-80 w-80 rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={time} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Time Management</h1>
                      <div className=''>
                          <p className='text-center text-xl  mt-2'> Efficiently managing time and prioritizing tasks.</p>
                      </div>
                  </div>
                  <div className='card flex-col p-5  h-80 w-80 rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={creative} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif  mt-10'>Creativity</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'>Ability to think creatively and generate innovative ideas.</p>
                      </div>
                  </div>
                  <div className='card flex-col p-5  h-80 w-80  rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={adaptability} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Adaptability</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'> Flexibility to adapt to changing circumstances and environments.</p>
                      </div>
                  </div>
                  <div className='card flex-col p-5  w-80 h-80 rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={details} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Attention to Detail</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'>Thoroughness and accuracy in completing tasks.</p>
                      </div>
                  </div>

                  <div className='card flex-col p-5 w-80 h-80 rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={critical} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Critical Thinking</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'>Ability to analyze information and make reasoned judgments.</p>
                      </div>
                  </div>

                  <div className='card flex-col p-5  w-80 h-80 rounded-md'>
                      <div className='flex items-center justify-center'>
                          <img src={teamwork} alt='' width={100} className='move-anim' />
                      </div>
                      <h1 className='text-center text-2xl font-serif mt-10'>Collaboration</h1>
                      <div className=''>
                          <p className='text-center text-xl mt-2'>Working effectively with others in a team setting.</p>
                      </div>
                  </div>
                  
              </div>

          </div>
</div>

      </div>

   
    </div>
   
  )
}

export default About