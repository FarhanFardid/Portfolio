import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
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

const Skills = () => {
    return (
        <div className='bg-gradient-to-r from-[#661e80] to-[#0f0215] p-3'>
           <h3 className=' text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-7 py-5 '>Skills</h3>
            <div className='p-3'>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-none "
      >
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={react} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">React JS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={js} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">JavaScript</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={node} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Node JS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={express} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Express JS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={mongo} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">MongoDB</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={firebase} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Firebase</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={jwt} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">JWT</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={bs} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Bootstrap</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={tailwind} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tailwind CSS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={html} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">HTML</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={css} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">CSS</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={c_pro} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">C Programming</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={git} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Git</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={github} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">GitHub</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={api} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">REST Api</h2>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="card md:w-80 w-40 bg-base-300 shadow-xl">
  <figure className="px-2 pt-10">
    <img src={devtool} alt="skills" className="rounded-xl h-28 w-40 md:h-32 md:w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Chrome DevTool</h2>
  </div>
</div></SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Skills;