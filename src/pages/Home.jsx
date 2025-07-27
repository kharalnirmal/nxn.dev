import React from 'react';
import Education from './Education';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';

const Home = () => {
  const techStack = [
    { name: "React", imgSrc: "/public/svg/react-svgrepo-com.svg" },
    { name: "Redux", imgSrc: "/public/svg/redux-svgrepo-com.svg" },
    { name: "Javascript", imgSrc: "/public/svg/js-svgrepo-com.svg" },
    { name: "Github", imgSrc: "/public/svg/github-01-svgrepo-com.svg" },
    { name: "Tailwind", imgSrc: "/public/svg/tailwind-css-svgrepo-com.svg" },
    { name: "Express", imgSrc: "/public/svg/express-svgrepo-com.svg" },
    { name: "MongoDB", imgSrc: "/public/svg/mongodb-svgrepo-com.svg" },
    { name: "MySql", imgSrc: "/public/svg/mysql-svgrepo-com.svg" },
    { name: "Docker", imgSrc: "/public/svg/docker-svgrepo-com.svg" },
    { name: "GSAP", imgSrc: "/public/svg/gsap-logo_svgstack_com_202507269823.svg" },
    { name: "Node Js", imgSrc: "/public/svg/nodejs-logo-svgrepo-com.svg" },
  ]

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.three', { opacity: 0,x: -70, duration: .8, ease: 'power4.out' }, '0.5')
    .from('.two', { opacity: 0, x: -70, duration: .8, ease: 'power4.out' }, '-=0.5')
    .from('.seven', { opacity: 0, x: 70, duration: .8, ease: 'power4.out' }, '-=0.5')
    .from('.six', { opacity: 0, x: 70, duration: .8, ease: 'power4.out' }, '-=0.5')
    .from('.four', { opacity: 0, y:70 , duration: .8, ease: 'power4.out' }, '-=0.5')
    .from('.five', { opacity: 0, x: 70, duration: .8, ease: 'power4.out' }, '-=0.5')
  })



  return (
    <section className="h-screen w-screen overflow-auto">
      {/* Responsive Layout */}
      <div
        className="
          flex flex-col gap-3 max-w-[90vw] mx-auto px-2 pb-16
          md:grid md:grid-cols-12 md:grid-rows-9 md:gap-3
        "
      >
        {/* -------------------------------picture div ------------------------------- */}
        <div className="one bg-[#18181b] text-white p-4 rounded-2xl md:col-span-3 md:row-span-3 md:col-start-6 md:row-start-3">
          <div className="h-full w-full flex-center flex-col">
            <img
              src="/public/MYPIC.webp"
              className="w-20 h-20 rounded-full object-cover md:w-40 md:h-40"
              alt="Profile Picture"
            />
            <p className="text-[#194f68] font-bold text-2xl uppercase text-center pt-3 md:text-4xl
            md:pt-5">
              nirmal kharal
            </p>
          </div>
        </div>
        {/* --------------------------------------identity div -------------------------------------- */}
        <div className="two bg-[#0D3C52] text-white p-4 rounded-2xl md:col-span-4 md:row-span-2 md:col-start-2 md:row-start-3
        flex justify-center flex-col text-center leading-9 ">
          <h1 className=" text-[2rem] font-bold ">Student &</h1>
          <h1 className=" text-[2rem] font-bold ">Fullstack Developer</h1>
        </div>
        {/* ---------------------introduction div ------------------------------------------------------- */}
        <div className="three bg-[#18181B] text-white p-5  rounded-2xl md:col-span-7 md:row-span-2 md:col-start-2">
          <span className='font-bold text-2xl md:text-4xl py-2 '>Who am i?</span><br />
          <p className='pt-3  leading-[29px] text-xl md:text-2xl opacity-[0.6]'>Hi, I'm Nirmal a Full Stack Developer currently studying at Tribhuvan University in Nepal.
            I'm passionate about web development and always eager to learn new technologies . If you have a project you'd like to collaborate on, feel free to reach out. I'd love to connect!</p>
        </div>
        {/* --------------------------------------------technologies div -------------------------------------------- */}
        <div className=" four bg-[#18181B] text-white p-4 rounded-2xl md:col-span-4 md:row-span-5 md:col-start-2 md:row-start-5">
          <h1 className='text-3xl font-bold p-5'>Technologies I have worked with</h1>
          <div className=' flex flex-wrap justify-center gap-4 p-5 md:gap-7'>
            {techStack.map((tech, index) => (
              <img src={tech.imgSrc} alt={tech.name} key={index} className=' object-fit size-15 md:size-18 md:gap-3' />
            ))}
          </div>
          {/* -----------------------------------------------Education div ---------------------------------------------------- */}

        </div>
        <div className="five bg-[#18181B] text-white p-4 rounded-2xl md:col-span-6 md:row-span-4 md:col-start-6 md:row-start-6">
          <div>
            <Education />
            
          </div>
        </div>

        {/* ------------------------------------------------galaxies div-------------------------------------------------------- */}
        <div className="six bg-[#0D3C52] text-white  rounded-2xl md:col-span-3 md:row-span-3 md:col-start-9 hidden md:block">
          <img src="/public/galaxies.webp" className='h-full w-full  object-cover rounded-2xl ' alt="" />
        </div>
        {/* --------------------------------------------------------quotes div-------------------------------------------------------- */}
        <div className="seven relative bg-[#0D3C52] text-white p-4 rounded-2xl md:col-span-3 md:row-span-2 md:col-start-9 md:row-start-4 hidden  md:block">
          <h1 className='relative text-2xl w-[90%] font-bold abs-center text-center'>"When you truly love what you do, great work becomes effortless."</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
