import slider1 from '../../assets/images/slider/web-1.png'
import slider2 from '../../assets/images/slider/full-1.png'
import slider3 from '../../assets/images/slider/mern-1.jpg'
import slider4 from '../../assets/images/slider/front-1.jpg'
import slider5 from '../../assets/images/slider/backend-4.png'
import slider6 from '../../assets/images/slider/front-2.png'
import slider7 from '../../assets/images/slider/backend-3.png'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Work = () => {
    return (
        <div className='bg-gradient-to-r from-[#0f0215] to-[#661e80]'>
            <h3 className='text-5xl font-bold text-yellow-400 text-center py-3 '>What I do?</h3>
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

  </AutoplaySlider>
                
        </div>
    );
};

export default Work;