import React from 'react';
import Education from './Education';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const techStack = [
    { name: "React", imgSrc: "/svg/react-svgrepo-com.svg" },
    { name: "Redux", imgSrc: "/svg/redux-svgrepo-com.svg" },
    { name: "Javascript", imgSrc: "/svg/js-svgrepo-com.svg" },
    { name: "Github", imgSrc: "/svg/github-01-svgrepo-com.svg" },
    { name: "Tailwind", imgSrc: "/svg/tailwind-css-svgrepo-com.svg" },
    { name: "Express", imgSrc: "/svg/express-svgrepo-com.svg" },
    { name: "MongoDB", imgSrc: "/svg/mongodb-svgrepo-com.svg" },
    { name: "MySql", imgSrc: "/svg/mysql-svgrepo-com.svg" },
    { name: "Docker", imgSrc: "/svg/docker-svgrepo-com.svg" },
    { name: "GSAP", imgSrc: "/svg/gsap-logo_svgstack_com_202507269823.svg" },
    { name: "Node Js", imgSrc: "/svg/nodejs-logo-svgrepo-com.svg" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.three', { opacity: 0, x: -70, duration: 0.5, ease: 'power1.out' }, '0.5')
      .from('.two', { opacity: 0, x: -70, duration: 0.5, ease: 'power1.out' }, '-=0.3')
      .from('.seven', { opacity: 0, x: 70, duration: 0.5, ease: 'power1.out' }, '-=0.3')
      .from('.six', { opacity: 0, x: 70, duration: 0.5, ease: 'power1.out' }, '-=0.3')
      .from('.four', { opacity: 0, y: 70, duration: 0.5, ease: 'power1.out' }, '-=0.3')
      .from('.five', { opacity: 0, x: 70, duration: 0.5, ease: 'power1.out' }, '-=0.3');

  
  }, []);

  return (
    <section className="h-screen w-screen overflow-auto">
      <div className="flex flex-col gap-3 max-w-[90vw] mx-auto px-2 pb-16 md:grid md:grid-cols-12 md:grid-rows-9 md:gap-3">
        {/* Profile Picture */}
        <div className="one bg-[#18181b] group p-4 rounded-2xl md:col-span-3 md:row-span-3 md:col-start-6 md:row-start-3">
          <div className="h-full w-full flex-center flex-col">
            <img
              src="/MYPIC.webp"
              className="w-20 h-20 rounded-full object-cover md:w-40 md:h-40"
              alt="Profile Picture"
            />
            <p className="group-hover:text-white/50 text-[#194f68] font-bold text-2xl uppercase text-center pt-3 md:text-5xl md:pt-5">
              nirmal kharal
            </p>
          </div>
        </div>

        {/* Identity Section */}
        <div className="two bg-[#0D3C52] text-white p-4 rounded-2xl md:col-span-4 md:row-span-2 md:col-start-2 md:row-start-3 flex justify-center flex-col text-center leading-9 md:leading-11">
          <h1 className="text-[2rem] md:text-[2.6rem] font-bold">Student &</h1>
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold">Fullstack Developer</h1>
        </div>

        {/* Intro Section */}
        <div className="three bg-[#18181B] text-white p-5 rounded-2xl md:col-span-7 md:row-span-2 md:col-start-2">
          <span className="font-bold text-2xl md:text-4xl py-2">Who am I?</span>
          <p className="pt-3 md:leading-[32px] text-lg d:text-[1.3rem] opacity-[0.6] pr-5">
            Hi, I'm Nirmal, a Full Stack Developer currently studying at Tribhuvan University in Nepal. I focus on building scalable and efficient web applications, with a strong interest in creative development. I'm always looking to collaborate on meaningful projects and explore new opportunities, feel free to connect.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="md:mb-20 four bg-[#18181B] text-white p-4 rounded-2xl md:col-span-4 md:row-span-5 md:col-start-2 md:row-start-5">
          <h1 className="text-3xl font-bold p-5">Technologies I have worked with</h1>
          <div className="flex flex-wrap justify-center gap-4 p-5 md:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="relative  group flex flex-col items-center tech-item hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="w-10 h-10 md:w-14 md:h-14 object-cover"
                />
                <div className="absolute -top-8 bg-[#0D3C52] text-white text-xs md:text-sm px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-10">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="relative mb-20 five bg-[#18181B] text-white rounded-2xl md:col-span-6 md:row-span-4 md:col-start-6 md:row-start-6">
          <div className="relative">
            <Education />
          </div>
        </div>

        {/* Galaxies */}
        <div className="six bg-[#0D3C52] text-white rounded-2xl md:col-span-3 md:row-span-3 md:col-start-9 hidden md:block">
          <img
            src="/galaxies.webp"
            className="h-full w-full object-cover rounded-2xl"
            alt="galaxies"
          />
        </div>

        {/* Quote Box */}
        <div className="seven relative bg-[#0D3C52] text-white p-4 rounded-2xl md:col-span-3 md:row-span-2 md:col-start-9 md:row-start-4 hidden md:block">
          <h1 className="relative text-2xl w-[90%] font-bold abs-center text-center">
            "When you truly love what you do, great work becomes effortless."
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
