import image from '../../assets/images/intro-3.png'

const Introduction = () => {
    return (
        <div id="my_profile" className="hero  bg-base-200 bg-gradient-to-r from-[#661e80] to-[#0f0215]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-xs md:max-w-sm rounded-lg shadow-2xl max-h-72 md:max-h-full " />
          <div className='p-1 md:p-5'>
            <h1 className="text-xl md:text-5xl font-bold text-yellow-400">My Profile</h1>
            <p className="py-1 md:py-6 text-white md:text-lg  text-sm font-normal">

            Hello! I'm a dynamic full-stack web developer, specializing in JavaScript and React, and proficient in HTML, CSS, Frontend Frameworks, Node.js, Express.js, MongoDB, and more. With Bachelor's and Master's degrees in Computer Science and Engineering, I've established a robust academic foundation, driving my passion for creating seamless digital experiences. My dedication centers on harnessing my skills to provide innovative solutions and exceptional user experiences. I am continuously endeavoring to elevate my coding proficiency and expand my knowledge base. I'm committed to aligning my expertise with organizational goals to drive impactful results. Thriving in dynamic environments, I see challenges as opportunities for growth and innovation. My expertise spans both front-end and back-end technologies, allowing me to create dynamic and user-friendly web applications. I'm devoted to delivering cutting-edge solutions that blend creativity with functionality, catering to the unique needs of clients and users alike.</p>
            
          </div>
        </div>
      </div>
    );
};

export default Introduction;