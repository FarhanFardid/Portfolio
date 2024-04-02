import { Link } from 'react-router-dom';
import banner from '../../assets/images/cover_img.png'

const Banner = () => {
    return (
       
            <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl bg-slate-900 bg-opacity-50 p-5 rounded-lg">
      <h1 className="mb-5 text-3xl md:text-6xl font-bold"> <span className='text-yellow-400'>Hi,</span>  I am Farhan Fardid</h1>
      <h4 className='mb-5 text-xl md:text-3xl font-semibold text-violet-500'>MERN Stack Web Developer</h4>
      <h3 className='text-xl md:text-4xl font-bold mb-5 text-yellow-400'>& </h3>
      <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to My Web World</h1>
      <h3 className="mb-5 text-xl md:text-4xl font-bold text-yellow-400">
Reveal the depth of my web development skills and witness innovation at its finest.</h3>
   
      <button className="btn btn-primary"><a href= "#contact" >Let's Connect</a> </button>
    </div>
  </div>
</div>
       
    );
};

export default Banner;