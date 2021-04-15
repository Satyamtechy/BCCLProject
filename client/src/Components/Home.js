import React from 'react'
import Navbar from './Navbar'
import Pic1 from '../Components/Images/Pic1.jpg'
import Pic2 from '../Components/Images/Pic2.jpg'
import Pic3 from '../Components/Images/Pic3.jpg'
import Footer from './Footer'
import './Home.css'
import business from './Images/business.png'
import personnel from './Images/personnel.png'
import operations from './Images/operation.png'
import project from './Images/project.png'
import finance from './Images/finance.png'
import vigilance from './Images/viglogo.png'
const Home = () => {
    return (
        <>
        <Navbar/>
        
        <div id="slider">
            <figure className="slider_pic">
                <img src={Pic1} alt="logo"/>
                <img src={Pic2} alt="logo"/>
                <img src={Pic3} alt="logo"/>
                <img src={Pic1} alt="logo"/>
                <img src={Pic3} alt="logo"/>
            </figure>
            <div className="about" id="about">
            <h2 className="about_title">ABOUT US</h2>
            <hr style={{border:'0', height:'3px',backgroundColor:"#477188"}}></hr>
            <p className="title_2">Welcome To Bharat Coking Coal Limited, Dhanbad</p>
            <p className="para">BCCL was incorporated in January, 1972 to operate coking coal mines operating in the Jharia & Raniganj Coalfields, taken over by the Govt. of India on 16th Oct,1971 to ensure planned development of the scarce coking coal resources in the country.It is a Public Sector Undertaking engaged in mining of coal and allied activities. It occupies an important place in as much as it produces bulk of the coking coal mined in the country.</p>
            </div>
            
            <div id="service"className="services">
                <h2 className="services_title">OUR SERVICES</h2>
                <hr style={{border:'0', height:'3px',backgroundColor:"#477188"}}></hr>
                <section className="services_pic">
                    <img src={business} alt="logo"/>
                    <img src={personnel} alt="logo"/>
                    <img src={operations} alt="logo"/>
                </section> 
                <section className="services_pic">   
                    <img src={project} alt="logo"/>
                    <img src={finance} alt="logo"/>
                    <img src={vigilance} alt="logo"/>
                </section>
                <hr style={{border:'0', height:'3px',backgroundColor:"#477188"}}></hr>
            </div>
           
            
        </div>
        <Footer/>
        </>
    )
}

export default Home
