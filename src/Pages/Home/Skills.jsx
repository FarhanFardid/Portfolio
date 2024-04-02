import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay, Navigation } from 'swiper/modules';
import react from '../../assets/images/skills/react.png'
import api from '../../assets/images/skills/api.png'
import c_pro from '../../assets/images/skills/c.jpg'
import bs from '../../assets/images/skills/bootstrap.png'
import css from '../../assets/images/skills/css.png'
import devtool from '../../assets/images/skills/devtools.png'
import express from '../../assets/images/skills/express.png'
import firebase from '../../assets/images/skills/firebase.png'
import git from '../../assets/images/skills/git.png'
import github from '../../assets/images/skills/github.png'
import html from '../../assets/images/skills/HTML.png'
import js from '../../assets/images/skills/js.png'
import jwt from '../../assets/images/skills/jwt.png'
import mongo from '../../assets/images/skills/mongo.png'
import node from '../../assets/images/skills/node.png'
import tailwind from '../../assets/images/skills/tailwind.png'
import axios from '../../assets/images/skills/axios.jpeg'
import xml from '../../assets/images/skills/xml.png'
import json from '../../assets/images/skills/json.png'
import router from '../../assets/images/skills/router.png'
import hook from '../../assets/images/skills/hook.png'
import context from '../../assets/images/skills/context.png'
import atlas from '../../assets/images/skills/MDB atlas.png'
import Tanquery from '../../assets/images/skills/tanQuery.png'
import flowbite from '../../assets/images/skills/flowbite.png'
import material from '../../assets/images/skills/material.png'
import daisy from '../../assets/images/skills/daisy.png'
import netlify from '../../assets/images/skills/netlify.png'
import VsCode from '../../assets/images/skills/vsCode.png'
import vite from '../../assets/images/skills/vite.png'


const Skills = () => {
    return (
        <div id="tech_Stack" className='bg-gradient-to-r from-[#661e80] to-[#0f0215] p-3'>
           <h3 className=' text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-7 py-5 '>Tech Stack</h3>
           <p className=' text-sm md:text-xl font-semibold text-white text-center md:py-3 py-1 '>Explore my diverse tech stack encompassing JavaScript, React, Node.js, Express.js, MongoDB, and an array of other essential tools and technologies, elegantly displayed with effortless automatic swiping </p>
            <div className='p-3'>
      <Swiper
   
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-none"
      >
           <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={js} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">JavaScript</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={react} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">React JS</h2>
  </div>
</div></SwiperSlide>
     
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={node} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Node JS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={express} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Express JS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={mongo} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">MongoDB</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={firebase} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Firebase</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={jwt} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">JWT</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={bs} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Bootstrap</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={tailwind} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Tailwind CSS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={html} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">HTML5</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={css} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">CSS3</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={json} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">JSON</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={xml} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">XML</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={router} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">React Router</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={hook} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">React Hook Form</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={context} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">React Context API</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={axios} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Axios</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={Tanquery} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">React Query</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={atlas} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">MongoDB Atlas</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={c_pro} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">C Programming</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={flowbite} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Flowbite</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={material} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Material UI</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={daisy} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Daisy UI</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={git} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Git</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={github} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">GitHub</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={api} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">REST Api</h2>
  </div>
</div></SwiperSlide>
<SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={VsCode} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Vs Code</h2>
  </div>
</div></SwiperSlide>
<SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={netlify} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Netlify</h2>
  </div>
</div></SwiperSlide>
<SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={vite} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Vite</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-1 pt-2 md:px-2 md:pt-10">
    <img src={devtool} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xs md:text-lg">Chrome DevTool</h2>
  </div>
</div></SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Skills;