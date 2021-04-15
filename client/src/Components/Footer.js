import React from 'react'
import './Footer.css'
import dlogo from './Images/dlogo.png'
import govlogo from './Images/govlogo.png'
import indiascience from './Images/indiasciencelogo.original.png'
import pmindia from './Images/pm-india.png'
import swachh from './Images/swachh-bharat.jpg'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <p>Information is being made available at this site, purely as a measure of public facilitation. While every effort has been made to ensure that the information hosted on this website is accurate ,”BCCL, Dhanbad” do not hold themselves liable for any consequences, legal or otherwise, arising out of any of such information.</p>
            </footer>  
            <footer className="footer_icons">
                <figure>
                    <img src={dlogo} alt="logo"/>
                    <img src={govlogo} alt="logo"/>
                    <img src={indiascience} alt="logo"/>
                    <img src={pmindia} alt="logo"/>
                    <img src={swachh} alt="logo"/>
                </figure>
            </footer>
        </>
    ) 
}
export default Footer