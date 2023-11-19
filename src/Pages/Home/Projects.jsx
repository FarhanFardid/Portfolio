

import sportz from '../../assets/images/projects/sportz.png'
import kids from '../../assets/images/projects/kids.png'
import cafe from '../../assets/images/projects/cafe.png'

const Projects = () => {
    return (
        <div>
            <h3 className='text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-7 py-3 '>Projects</h3>
            <div className="card lg:card-side bg-base-100 shadow-xl  border-2">
  <figure className='w-100'><img src={sportz} alt="sports" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Sportz Blitz Summer Camp</h2>
    <p>Introducing Sportz Blitz (MERN stack website): Sports-based summer camp website.</p>
    <p><span className='font-bold'>Features:</span> Different dashboard functionality based on authorization(Student, Instructor, Admin). Students can select classes and enroll in the classes by making a successful payment through cards.Admin can approve, and deny classes by sending feedback on denied classes that are added by the Instructors.</p>
    <p><span className='font-bold'>Technologies:</span> React, React Router, Tailwind CSS, Daisy UI, React Awesome Component, TanStack Query, Axios, React Hook Form, Firebase, JWT, React Stripe.js, Node, Express.js, and MongoDB.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://sports-blitz-2349b.web.app/' target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Sportz_Blitz_SummerCamp_Front_End'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Sportz_Blitz_SummerCamp_Back_End'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl border-2">
  <figure className='w-100'><img src={kids} alt="kids" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Kids Heaven</h2>
    <p>Introducing Kids Heaven (MERN stack website): An animal kids toy shop website.</p>
    <p><span className='font-bold'>Features:</span> Added Firebase authentication feature. Users can register and log in to the website.
Develop a user dashboard where all the available toys are displayed to the user along with additional information about the toys.Users can add, delete and update toys after user login to the website otherwise they can’t perform CRUD operations.
My toys page will display only the toys that the users added.</p>
    <p><span className='font-bold'>Technologies:</span> React, React Router, Firebase, Tailwind CSS, Daisy UI, Material UI, React Tabs, React Toastify, CORS,
Node, Express.js, and MongoDB.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://kids-heaven-client.web.app/'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Kids_Heaven_Front_End'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Kids_Heaven_Back_End'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl border-2">
  <figure className='w-100'><img src={cafe} alt="sports" className='p-2 w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Cafe Fajitas</h2>
    <p>Introducing Cafe Fajitas: A website on Mexican foods chef details with Recipes.</p>
    <p><span className='font-bold'>Features:</span>Firebase authentication feature added. Users can register and log in to the website.Based on the user login state private route feature is developed and users without login to the website can not view the details of the chefs.The chef details data are loaded from the server and a favorite button feature is also implemented for the user to mark
a chef’s recipe item as the favorite.</p>
    <p><span className='font-bold'>Technologies:</span>  React, React Router, Firebase, Bootstrap, React Bootstrap, React Toastify, CORS, Node, and Express.js.</p>
    <div className="card-actions justify-between pt-2">
        <a href='https://cafefajitas.netlify.app/'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Live Site</button></a>
        <a href='https://github.com/FarhanFardid/Cafe_Fajitas_Front_End'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Front End</button></a>
        <a href='https://github.com/FarhanFardid/Cafe_Fajitas_Back_End'  target='blank'>  <button className="btn bg-purple-700 text-white font-bold hover:bg-purple-800">Back End</button></a>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Projects;