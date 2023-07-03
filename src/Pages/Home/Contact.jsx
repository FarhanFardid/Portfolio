import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <div className="hero p-4 max-h-screen bg-gradient-to-r from-[#3a113a] to-[#57127a]">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className=" text-2xl md:text-5xl font-bold text-yellow-400">Let's Connect</h1>
      <p className=" py-2 md:py-6 text-white font-medium  text-sm md:text-lg">
I'm excited to connect and explore potential collaborations. Whether you have a project idea in mind or simply want to discuss web development trends, feel free to reach out. Let's create something exceptional together – drop me a message, and I'll get back to you promptly. You can also connect with me through Email, LinkedIn, WhatsApp, Facebook.</p>
<p className=" py-2  text-white font-medium  text-sm md:text-lg">Email: farhanfardid62@gmail.com<br/>
Phone: +880 01968820121</p>
<div className="flex  gap-4 justify-center">
      <a href='https://www.facebook.com/farhan.fardid/' target='blank' ><FaFacebookSquare className='h-6 w-6 text-blue-700 bg-white'/> </a> 
      <a href='https://www.linkedin.com/in/farhan-fardid-3334a3278/' target='blank'><FaLinkedin className='h-6 w-6 text-blue-800 bg-white'/></a> 
      <a href='https://wa.link/ib49jh' target='blank'><FaWhatsappSquare className='h-6 w-6 text-green-600 bg-white'/></a>
     
    </div>
    </div>
    <div className="card flex-shrink-0 w-full md:max-w-sm max-w-xs shadow-xl bg-base-300 md:mb-8">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold ">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered border-2" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered " />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message</span>
          </label>
          <textarea rows={5} cols={17} placeholder="message"></textarea>
         
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;