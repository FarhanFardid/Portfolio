
import slider1 from '../../assets/images/slider/web design.jpg'
import slider2 from '../../assets/images/slider/full-1.png'
import slider3 from '../../assets/images/slider/mern stack.jpg'
import slider4 from '../../assets/images/slider/front-1.jpg'
import slider5 from '../../assets/images/slider/Backend.jpg'
import slider6 from '../../assets/images/slider/api.png'
import slider7 from '../../assets/images/slider/responsive.jpg'
import slider8 from '../../assets/images/slider/productPage.jpg'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Work = () => {
    return (
        <div id="services" className=' bg-gradient-to-r from-[#0f0215] to-[#661e80]'>
            <h3 className='text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-5 py-1 '>Services</h3>
            <p className=' text-sm md:text-xl font-semibold text-white text-center md:py-5 py-1 '> Elevate your digital presence with my comprehensive suite of services, including full-stack and MERN stack development, frontend and backend development, seamless API integration, responsive web design, and captivating product landing page development.</p>
            <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
  >
    <div data-src={slider1} />
    <div data-src={slider2} />
    <div data-src={slider3} />
    <div data-src={slider4} />
    <div data-src={slider5} />
    <div data-src={slider6} />
    <div data-src={slider7} />
    <div data-src={slider8} />
   
    

  </AutoplaySlider>
                
        </div>
    );
};

export default Work;