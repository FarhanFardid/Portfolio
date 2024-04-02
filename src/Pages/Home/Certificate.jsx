
import certificate1 from '../../assets/images/certificate1.jpg'
import certificate2 from '../../assets/images/certificate2.jpg'
const Certificate = () => {
    return (
        <div id="credential" className=' bg-gradient-to-r from-[#0f0215] to-[#661e80]'>
            <h3 className='text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-5 py-1 '>Professional Certificate</h3>
            <p className=' text-sm md:text-xl font-semibold text-white text-center md:py-5 py-1 '> Browse through my collection of professional certificates, each representing a milestone in my journey. View the associated credential and learn more about my expertise and accomplishments.</p>
           
            <div className='md: flex  justify-around items-center py-2'>
            <div className="card w-96 bg-violet-400 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={certificate1} alt="WPH certificate" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-violet-800 text-sm md:text-lg">Web Development Certificate</h2>
    <p className='text-black font-semibold text-xs md:text-base'>Provider: Programming Hero </p>
    <div className="card-actions">
      <button className="btn btn-primary btn-xs md:btn-md font-medium"><a href="https://drive.google.com/file/d/1U2a7UwFbRfIhGqJkfVhi5lMrp11fLeLp/view" target='blank'>View Credentials</a> </button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-violet-400 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={certificate2} alt="FCC certificate" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-violet-800 text-sm md:text-lg">Responsive We Design Certificate</h2>
    <p className='text-black font-semibold text-xs md:text-base'>Provider: Free Code Camp</p>
    <div className="card-actions">
    <button className="btn btn-primary btn-xs md:btn-md font-medium"><a href="https://www.freecodecamp.org/certification/FarhanFardid62/responsive-web-design" target='blank'>View Credentials</a> </button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Certificate;