import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img1 from '../images/img1.png'
import './Services.css'
import Webdevimg from '../images/webdevelopment.png' 
import Img3 from '../images/2 copy.png'
import Erpimg from '../images/ERP.png' 
import Dataserverimg from '../images/dataserver.png'
import Img9 from '../images/webimg1.png'
import Img10 from '../images/webimg2.png'
import Img11 from '../images/webimg3.png'
import Img12 from '../images/erp-img1.png' 
import Img13 from '../images/erp-img2.png'
import Img14 from '../images/erp-img3.png'
import Img19 from '../images/linkedin.png'
import Img20 from '../images/facebook.png'
import Img21 from '../images/whatsapp.png'
import Img22 from '../images/insta.webp'
import Datascr  from '../images/datascr.png'
import Emailbst  from '../images/emailbst.png'
import Whatappbst  from '../images/whatappbst.png'
import { Link } from 'react-router-dom'
export default function Services(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    return( 
       
        <>
        <div className=" services">
            <div className='bg-change'>
            <div className='row  pad title'>
                <div className='col-md-6 overalltitlesection' data-aos="fade-up">
                    <h1 className='services-title ft-siz'>Empowering Businesses Digitally</h1>
                    <p  className='services-description linehgt'>From captivating web development to targeted social media management, 
                        we provide the tools you need to succeed online. With seamless ERP integration, 
                        secure data servers, and strategic messaging services, we empower you to drive 
                        growth and connect with your audience effectively. Partner with us to unlock your business's full digital 
                        potential.</p>
                </div>
                <div className='col-md-6 center  img-fluid ' data-aos="fade-up">
                    <img src={Img1} className='servicesimage hideinmob' alt="services-mage" />
                </div>
            </div>
            <div className='spt-overall  center pad ' data-aos="fade-up">
                <div className="spt" >
                <div className='center'>
                    <img src={Webdevimg} className="spt-image" alt="..."/>
                </div>
                    <div className="spt-body">
                        <p className="spt-text">Web development</p>
                        <p className='hiddentext'>Craft impactful digital solutions.</p>
                    </div>
                </div>
                <div className="spt">
                    <div className='center'>
                    <img src={Img3} className="spt-image" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Social Media Management</p>
                        <p className='hiddentext'>Cultivate brand awareness, drive engagement.</p>
                    </div>
                </div>
                <div className="spt">
                    <div className='center'>
                        <img src={Erpimg} className="spt-image" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Entroxa</p>
                        <p className='hiddentext'>Optimize operations, empower strategic growth.</p>
                    </div>
                </div>
                <div className="spt">
                <div className='center'>
                    <img src={Dataserverimg} className="spt-image" alt="..."/>
                </div>
                    <div className="spt-body">
                        <p className="spt-text">Data Server</p>
                        <p className='hiddentext'>Secure data foundation, drive informed decisions.</p>
                    </div>
                </div>
                <div className="spt">
                <div className='center'>

                    <img src={Whatappbst} className="spt-image" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Whatsapp Marketing</p>
                        <p className='hiddentext'>Targeted outreach, strengthen connections.</p>
                    </div>
                </div>
                <div className="spt">
                <div className='center'>

                    <img src={Emailbst} className="spt-image center" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Email Marketing</p>
                        <p className='hiddentext'>Data-driven campaigns, maximize ROI.</p>
                    </div>
                </div>
                <div className="spt ">
                    <div className='center'>

                    <img src={Datascr} className="spt-image " alt="..."/>
                    </div>
                    <div className="spt-body" >
                        <p className="spt-text">Data Scrapping</p>
                        <p className='hiddentext'>Extract valuable insights, gain strategic edge.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='web-overall bg-change clr pad ' data-aos="fade-up">
                <div className='web'>
                <h2 className='btmsp ft-siz ' >WEB DEVELOPMENT</h2>
                <p className='linehgt hideobj' data-aos="fade-up">Your website serves as the virtual storefront of your business.
                     Our expert team specializes in crafting visually stunning and 
                     user-friendly websites that captivate your audience and drive conversions. 
                    From sleek designs to seamless navigation, we ensure that every aspect of your website reflects your 
                    brand identity and resonates with your target market.</p>
                   <p  className='linehgt showobj'>
                   We craft visually stunning, user-friendly websites that captivate
                    your audience and drive conversions. With sleek designs and seamless
                     navigation, we ensure
                    your site reflects your brand and resonates with your target market.
                   </p>
                </div>
                 <div className='cnt1 center' >
                    <div className='img-cnts'>
                        <img className='webimage' src={Img9} alt="" />
                    </div>
                    <div className='img-cnts hideobj'>
                        <img className='webimage ' src={Img10} alt="" />
                    </div>
                    <div className='img-cnts hideobj'>
                        <img className='webimage ' src={Img11} alt="img11" />
                    </div>
                    </div>
                    <div className='center'>
                    <Link to="/Resources" >
                        <button className='btn web-btn btn-primary '>VIEW MORE</button>
                    </Link>
                    </div>
            </div>
            <div className='erp  pad padss ' >
                <h2 className='btmsp ft-siz' data-aos="fade-up">ENTROXA</h2>
                <p className='linehgt hideobj' data-aos="fade-up">Efficiently managing your business operations is crucial for sustained
                     growth and success. Our comprehensive ERP solutions integrate various 
                     functions, including accounting, human resources, inventory management,
                      and more, into a centralized system. With real-time insights and 
                      streamlined processes, you can enhance productivity, reduce costs,
                     and make informed decisions that propel your business forward.</p>
                <p className='linehgt showobj' data-aos="fade-up" >Your website is your online storefront. We specialize in creating captivating,
                     user-friendly websites that reflect 
                    your brand and engage your audience, ultimately driving conversions. </p>
                     <div className='center cnt1' data-aos="fade-up">
                        <img src={Img12} className='erp-image' alt="" />
                        <img src={Img13} className='erp-image' alt="" />
                        <img src={Img14} className='erp-image' alt="" />
                     </div>
            </div>
            <div className='pad bg-change'>
                <div className='row '>
                    <div className='col-lg-6 white dt-cnt dtser'>
                        <h2 data-aos="fade-up" className="ft-siz">DATA SERVER</h2>
                        <p className='linehgt hideobj' data-aos="fade-up">Data is the lifeblood of modern businesses, and safeguarding it is 
                            paramount. Our secure and reliable data servers provide a robust 
                            infrastructure for storing and accessing your valuable information.
                             Whether you're a small startup or a large enterprise, our scalable 
                             solutions ensure optimal performance and data protection, allowing you 
                            to focus on what matters most—growing your business.</p>
                            <p  className='linehgt showobj' data-aos="fade-up">Our secure data servers offer reliable storage and access
                                 for businesses of all sizes. With scalable solutions and 
                                 top-notch protection, you can focus on
                                 growing your business while we safeguard your valuable information.</p>
                    </div>
                    <div  className='col-lg-6 center animate' data-aos="fade-up">
                        <img className='data-image animate' src={Dataserverimg} alt="" />
                    </div>
                </div>
            </div>
            <div className='pad soc-cmpt bg-change row' >
                
                <div className='soc-overall col-lg-6 white  spt-overall'  >
                  
                    
                    
                    <div className='soc-el1' data-aos="fade-up">
                        <div className='soc-link-cnt center'>
                        <img className='soc-image' src={Img19} alt="" />
                        <p  className=' soc-text'>Linkedin</p>
                    </div>
                    <div className='soc-link-cnt center' data-aos="fade-up">
                        <img className='soc-image' src={Img20} alt="" />
                        <p  className=' soc-text'>Facebook</p>
                    </div>
                    </div>
                    <div className='soc-el2' data-aos="fade-up">
                    <div className='soc-link-cnt center'>
                        <img className='soc-image' src={Img21} alt="" />
                        <p  className=' soc-text'>Whatsapp</p>
                    </div>
                    <div className='soc-link-cnt center' data-aos="fade-up">
                        <img className='soc-image' src={Img22} alt="" />
                        <p className=' soc-text'>Instagram</p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-lg-6 white soc-des'>
                    <h2 data-aos="fade-up" className="ft-siz">Social Media Management</h2>
                    <p data-aos="fade-up" className='linehgt hideobj'>In a world where social media reigns supreme, leveraging these
                         platforms effectively can significantly impact your brand's visibility 
                         and engagement. Our social media management services encompass 
                         strategic content creation, community engagement, and targeted 
                         advertising across popular platforms such as YouTube, LinkedIn, 
                         Facebook, and Instagram. We help you build meaningful connections
                          with your audience, 
                        foster brand loyalty, and drive measurable results.</p>
                        <p  className='linehgt showobj' data-aos="fade-up">
                        Effective social media management boosts your brand's visibility and engagement. 
                        Our services include content creation, community engagement, and targeted advertising on platforms like YouTube, 
                        LinkedIn, Facebook, and Instagram. We help you connect with your audience, foster brand loyalty, and drive results.</p>
                </div>  
            </div>
            <div className='pad web dgi pads' >
                    <div>
                        <h2 className='ft-siz ' data-aos="fade-up">Digital Marketing</h2>
                        <p className='linehgt hideobj' data-aos="fade-up">
                        Reach your audience where they are with our comprehensive digital marketing 
                        solutions. From strategic WhatsApp campaigns to engaging email blasts and
                        insightful data scraping services, we've got you covered. Harness the power
                        of direct communication, targeted messaging, and actionable insights to drive
                            engagement, conversions, and business growth.
                        Let us help you make a meaningful impact in today's competitive landscape.
                        </p>
                        <p className='linehgt showobj' data-aos="fade-up">
                        Reach your audience effectively with our digital marketing solutions. We offer WhatsApp campaigns, email blasts, and data scraping services to drive engagement and conversions. Harness direct communication and actionable insights to grow your business. Let us help 
                        you make a meaningful impact in today's competitive landscape.</p>
                    </div>
                    <div className='row dgi-overall'>
                        <div className='col-lg-4'>
                            <h3 data-aos="fade-up" className="ft-siz">  WhatsApp Blast</h3>
                            <div className='center' data-aos="fade-up" >
                            <img className='data-image' src={Whatappbst} alt="" />
                            </div>
                            <div className='center' data-aos="fade-up">
                                <p className='linehgt dgi-cnt'>Engage with your audience directly and instantly through 
                                strategic WhatsApp campaigns. Our WhatsApp blast services 
                                enable you to deliver personalized messages, promotions, and updates 
                                to your customers, driving engagement and nurturing relationships. 
                               </p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4 cnt2'>
                            <h3 data-aos="fade-up" className="ft-siz"> Email Blast</h3>
                            <div className='center' data-aos="fade-up">
                                <img className='data-image' src={Emailbst} alt="" />
                            </div>
                            <div className='center' data-aos="fade-up">
                            <p className='linehgt dgi-cnt'>Email marketing remains one of the most effective ways to 
                                connect with your audience and drive conversions. Our email
                                 blasting services leverage targeted campaigns, compelling content, 
                                 and advanced analytics to deliver results. </p>
                        </div>
                        </div>  
                        <div className='col-lg-4 ' style={{alignItems:'center'}}>
                            <h3 data-aos="fade-up" className="ft-siz">  Data Scraping</h3>
                            <div className='center' data-aos="fade-up">
                                <img className='data-image' src={Datascr} alt="" />
                            </div>
                            <div className='center' data-aos="fade-up">
                            <p className='linehgt dgi-cnt'>In today's data-driven world, access to actionable 
                                insights is key to gaining a competitive edge. 
                                Our data scraping services harness the power of technology to gather valuable
                                 information from various online sources. </p>
                        </div>
                        </div>
                    </div>
            </div>
           <div>
                
            </div>
        </div>
        </>
    )
}