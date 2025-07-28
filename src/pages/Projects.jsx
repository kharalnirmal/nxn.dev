import { useGSAP } from "@gsap/react"
import ProjectData from "../data/ProjectData"
import gsap from "gsap"

const Projects = () => {

  useGSAP(()=>{
const t1 = gsap.timeline()
t1.from(".img",{opacity:0, duration:0.8,ease:"power1.inOut"},"<")
  .from(".description",{y:-100,opacity:0,duration:0.5,ease:"power1.inOut"},"<")
  })
console.log(ProjectData)
  return (
    <section className='h-[calc(100vh-100px)] overflow-y-auto w-screen'>
      {ProjectData.map((project, index) => (
        <div key={index} className=" flex flex-col md:flex-row mt-2 mb-3 mx-auto p-2 max-w-[75vw] gap-4 sm:gap-2">
          <div className=" img md:w-[50%] w-full    ">
            <img src={project.images} className="relative  w-full   md:h-full object-cover  rounded-3xl  " alt={project.name} />
          </div>
          <div className="md:w-[50%] -mt-2 md:mt-0  rounded-3xl flex flex-col gap-2">
            <div className=" description bg-[#18181b] rounded-3xl">
              <div className=" relative w-full flex flex-col px-3">
                <h1 className="font-bold md:text-3xl text-2xl py-2 text-white s ">{project.name}</h1>
                <p className="md:text-lg text-xs leading-[1] font-semibold  text-[#9ca3af]">{project.description}</p>
              </div>
              <div className="w-full p-3 flex">
                {project.technology.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 mr-1 bg-[#9ca3af] text-[10px] font-semibold uppercase rounded-4xl text-white/85 ">{tech}</span>
                ))}

              </div>
            </div>
            <a href={project.link} target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#18181b] hover:bg-[#38383c] py-3 rounded-3xl flex-center ">
              <img src="/public/svg/link-svgrepo-com.svg" className="size-10" alt="" />
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects