import logo from '../../assets/images/logo-1.png'
import { FaFacebookSquare,FaGithubSquare,FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
  <div>
   <img src={logo} alt="logo" className='h-24 w-24 rounded-full' />
    <p className='font-bold '><span className='text-red-600'>Farhan Fardid</span><br/>Providing You Dynamic Reliable Websites.</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="font-semibold">Full Stack Web development</a> 
    <a className="font-semibold">Front End Development</a> 
    <a className="font-semibold">Back End Development</a> 
    <a className="font-semibold">Responsive Website Design</a>
    <a className="font-semibold">Product Landing Page</a>
  </div> 
  <div>
   <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.facebook.com/farhan.fardid/' target='blank' ><FaFacebookSquare className='h-6 w-6 text-blue-600 bg-white'/> </a> 
      <a href='https://www.linkedin.com/in/farhan-fardid-3334a3278/' target='blank'><FaLinkedin className='h-6 w-6 text-blue-800 bg-white'/></a> 
      <a href='https://wa.link/ib49jh' target='blank'><FaWhatsappSquare className='h-6 w-6 text-green-600 bg-white'/></a>
      <a href='https://github.com/FarhanFardid' target='blank'><FaGithubSquare className='h-6 w-6 text-black bg-white'/></a>
    </div>
  </div> 
  <div>
    <p><span className='text-red-600 font-bold'>Copyright © {new Date().getFullYear()}</span>  - All rights reserved by @ Farhan Fardid.</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;