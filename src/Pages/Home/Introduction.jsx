import image from '../../assets/images/intro-3.png'

const Introduction = () => {
    return (
        <div className="hero max-h-screen bg-base-200 bg-gradient-to-r from-[#3d104d] to-[#a48fac]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl " />
          <div className='p-5'>
            <h1 className="text-5xl font-bold text-yellow-400">About Me</h1>
            <p className="py-6 text-white text-lg font-normal">
Hello, I'm a skilled and innovative full stack web developer with a passion for crafting seamless digital experiences. With a solid foundation in both front-end and back-end technologies, I specialize in creating dynamic and user-friendly web applications. I'm committed to delivering cutting-edge solutions that blend creativity with functionality to meet the unique needs of clients and users alike.</p>
            
          </div>
        </div>
      </div>
    );
};

export default Introduction;