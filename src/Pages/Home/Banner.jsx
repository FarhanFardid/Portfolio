import banner from '../../assets/images/cover_img.png'

const Banner = () => {
    return (
       
            <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl bg-slate-900 bg-opacity-25 p-5 rounded-lg">
      <h1 className="mb-5 text-6xl font-bold"> <span className='text-yellow-400'>Hello,</span>  I am Farhan Fardid</h1>
      <h4 className='mb-5 text-3xl font-semibold text-violet-500'>Full Stack MERN Developer</h4>
      <h3 className='text-4xl font-bold mb-5 text-yellow-400'>& </h3>
      <h1 className="mb-5 text-5xl font-bold">Welcome to My Web World</h1>
      <h3 className="mb-5 text-4xl font-bold">Discover My Web Development Skills</h3>
   
      <button className="btn btn-primary">Let's Connect</button>
    </div>
  </div>
</div>
       
    );
};

export default Banner;