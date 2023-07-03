

const Contact = () => {
    return (
        <div>
            <div className="hero p-4 max-h-screen bg-gradient-to-r from-[#3a113a] to-[#57127a]">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className=" text-2xl md:text-5xl font-bold text-yellow-400">Let's Connect</h1>
      <p className=" py-2 md:py-6 text-white font-medium  text-sm md:text-lg">
I'm excited to connect and explore potential collaborations. Whether you have a project idea in mind or simply want to discuss web development trends, feel free to reach out. Let's create something exceptional together – drop me a message, and I'll get back to you promptly.</p>
    </div>
    <div className="card flex-shrink-0 w-full md:max-w-sm max-w-xs shadow-2xl bg-base-300">
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