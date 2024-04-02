

import sportz from '../../assets/images/projects/sports.jpg'
import kids from '../../assets/images/projects/kids.jpg'
import cafe from '../../assets/images/projects/Cafe.jpg'
import diner from '../../assets/images/projects/diner.jpg'
import task from '../../assets/images/projects/Task.jpg'

const Projects = () => {
    return (
        <div id="projects" className='bg-gradient-to-r from-[#661e80] to-[#0f0215] py-3'>
            <h3 className='text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-7 py-3 '>Projects</h3>
            <div className="card lg:card-side bg-violet-400 shadow-xl  border-2">
  <figure className='w-100'><img src={sportz} alt="sports" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-black">Sportz Blitz Summer Camp</h2>
    <p className='text-black'><span className='font-bold'>Introducing Sportz Blitz Summer Camp :</span> A full Stack (MERN) Sports Camp website. Your ultimate destination for summer sports camp. This website provides students, instructors, and administrators with a seamless experience for managing and participating in summer camps. With Firebase authentication for user management and React Stripe for online payments.(Please visit the live site for better experience and visit repository for more details.)</p>
    
    <p className='text-black'><span className='font-bold'>Tools & Technologies:</span> React, React Router, Tailwind CSS, Daisy UI, React Awesome Component, TanStack Query, Axios, React Hook Form, Firebase, JWT, React Stripe.js, Node, Express.js, and MongoDB etc.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://sports-blitz-2349b.web.app/' target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Sportz_Blitz_SummerCamp_Front_End'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Sportz_Blitz_SummerCamp_Back_End'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
<div className="card lg:card-side bg-violet-400 shadow-xl border-2">
  <figure className='w-100'><img src={kids} alt="kids" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-black" >Kids Heaven</h2>
    <p className='text-black'><span className='font-bold'>Introducing Kids Heaven :</span> A full-stack (MERN) Toy Shop website, your ultimate destination for a diverse toy collection. Enjoy an immersive browsing experience akin to visiting a real toy store. With Firebase authentication, securely sign up and log in to access all toys. Users can perform CRUD operations, categorize toys for easy navigation, and search by name. (Please visit the live site for better experience and visit repository for more details.)</p>
 
    <p className='text-black'><span className='font-bold'>Tools & Technologies :</span> React, React Router, Firebase, Tailwind CSS, Daisy UI, Material UI, React Tabs, React Toastify, CORS,
Node, Express.js, and MongoDB etc.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://kids-heaven-client.web.app/'  target='blank'>  <button className="btn  btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Kids_Heaven_Front_End'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Kids_Heaven_Back_End'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
<div className="card lg:card-side bg-violet-400 shadow-xl border-2">
  <figure className='w-100'><img src={diner} alt="diner" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-black">Diner Lounge Restaurant</h2>
    <p className='text-black'><span className='font-bold'>Introducing Diner Lounge :</span>  A full stack comprehensive Restaurant Management System that caters to both administrators and customers. With separate admin and customer dashboards, Diner Lounge offers a seamless experience for managing restaurant operations and placing orders. Firebase authentication and React Stripe for payment processing. (Please visit the live site for better experience and visit repository for more details.)</p>
    <p className='text-black'><span className='font-bold'>Tools & Technologies:</span>  React, React Router, Firebase, Node, Express.js, MongoDB, Tailwind CSS, Axios, TanStack Query, React Hook Form, JWT, DaisyUI etc.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://bistro-boss-e5657.web.app/'  target='blank'>  <button className="btn  btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Diner_Lounge_Client'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Diner_Lounge_server'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
<div className="card lg:card-side bg-violet-400 shadow-xl border-2">
  <figure className='w-100'><img src={task} alt="diner" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-black">Task Genius</h2>
    <p className='text-black'><span className='font-bold'>Introducing Task Genius :</span>  A a full-stack project designed to streamline task management for users. This platform allows users to efficiently add, update, and remove tasks, ensuring a seamless workflow. It include the ability to add new tasks by providing details such as name, description etc. Updating task status. View all tasks and can removed completed tasks. (Please visit the live site for better experience and visit repository for more details.)</p>
    <p className='text-black'><span className='font-bold'>Tools & Technologies:</span>  React, React Router, Node, Express.js, MongoDB, Tailwind CSS, React Hook Form, DaisyUI etc.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://task-management-genius.netlify.app/'  target='blank'>  <button className="btn  btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Task_Management'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Task_Management_Backend'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
<div className="card lg:card-side bg-violet-400 shadow-xl border-2">
  <figure className='w-100'><img src={cafe} alt="cafe" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-black">Cafe Fajitas</h2>
    <p className='text-black'><span className='font-bold'>Introducing Cafe Fajitas :</span> A culinary journey by skilled chefs at Cafe. Discover a delightful gastronomic adventure with a diverse array of meticulously crafted recipes. Utilizing Firebase authentication, securely explore chef profiles and recipes. Personalize your experience by saving favorites and receiving notifications. Server-loaded chef data, secure Firebase authentication. (Please visit the live site for better experience and visit repository for more details.)</p>
    <p className='text-black'><span className='font-bold'>Tools & Technologies:</span>  React, React Router, Firebase, Bootstrap, React Bootstrap, React Toastify, SweetAlert, CORS, Node, and Express.js etc.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://cafefajitas.netlify.app/'  target='blank'>  <button className="btn  btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Cafe_Fajitas_Front_End'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Cafe_Fajitas_Back_End'  target='blank'>  <button className="btn btn-xs md:btn-md bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>

        </div>
    );
};

export default Projects;