import image from '../../assets/images/intro-3.png'

const Introduction = () => {
    return (
        <div className="hero max-h-screen bg-base-200 bg-gradient-to-r from-[#661e80] to-[#0f0215]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-xs md:max-w-sm rounded-lg shadow-2xl " />
          <div className='p-1 md:p-5'>
            <h1 className="text-xl md:text-5xl font-bold text-yellow-400">About Me</h1>
            <p className="py-1 md:py-6 text-white md:text-lg text-sm font-normal">
Hello, I'm a skilled and innovative full stack web developer with a passion for crafting seamless digital experiences. With a solid foundation in both front-end and back-end technologies, I specialize in creating dynamic and user-friendly web applications. I'm committed to delivering cutting-edge solutions that blend creativity with functionality to meet the unique needs of clients and users alike.</p>
            
          </div>
        </div>
      </div>
    );
};

export default Introduction;