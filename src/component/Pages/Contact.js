import React from 'react';
import Saidbar from './Saidbar'
import { FaPhoneAlt, FaTelegramPlane, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";

function Contact() {
    return (
        <div style={{display : 'flex'}}>
            
        <div style={{width:'25%'}}><Saidbar style={{marginLeft: '500px'}}/></div>
        <div id="imh11" style={{width: '75%',color: 'white', padding :'50px', textAlign: 'start'}}>
            <h1 style={{textAlign:'center'}}>Contact me</h1>
            <div style={{width:'50%',display: 'inline-block', marginTop:50}}>
                <p style={{marginBottom:'30px'}}><FaPhoneAlt /> : +998 91 119 90 44</p>
                
                <p style={{marginBottom:'30px'}}><MdAlternateEmail />   : xayrullodev2005@gmail.com</p>
                <p style={{marginBottom:'30px'}}><BsGeoAltFill /> : Fergana, Rishtan, Ak-yer</p>
                <h2>Follow me on social networks:</h2>
             <div style={{width: '400px', display:'flex'}}>
             <a style={{display: 'inline-block', marginRight: 30}} href="https://t.me/Xayrullodev"><FaTelegramPlane style={{width: '50px', height: '50px'}}/> </a>
                <a style={{display: 'inline-block', marginRight: 30}} href="https://www.instagram.com/xayrullodev"><FaInstagram style={{width: '50px', height: '50px'}}/> </a>
                <a style={{display: 'inline-block', marginRight: 30}}  href="https://google.com"><FaYoutube style={{width: '50px', height: '50px'}}/></a>
                <a style={{display: 'inline-block', marginRight: 30}}  href="https://google.com"><FaGithub style={{width: '50px', height: '50px'}}/></a>
             </div>
            </div>
            <div style={{width:'50%',display: 'inline-block', marginTop:80}}>
                <input type="text" placeholder="Full Name* " style={{width:"80%", height: '40px', display: 'block', marginBottom:30}}  />
                <input type="text" placeholder="Enter Email* " style={{width:"80%", height: '40px', display: 'block', marginBottom:30}}  />
                <input type="number" placeholder="Phone number* " style={{width:"80%", height: '40px', display: 'block', marginBottom:30}}  />
                <input type="date" placeholder="Enter * " style={{width:"80%", height: '40px', display: 'block', marginBottom:20}}  />
                <input type="submit" />
            </div>            
            </div>
       
     </div>
    );
}

export default Contact;