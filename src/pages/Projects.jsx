import ProjectData from "../data/ProjectData"

const Projects = () => {

  return (
    <section className='h-screen w-screen overflow-auto bg-white'>
      <div className=" flex flex-col md:flex-row mt-2 mb-3 mx-auto p-2 max-w-[75vw] gap-4 sm:gap-2">
        <div className="md:w-[50%] w-full   ">
          <img src="/gta.webp" className="relative  w-full    md:h-full object-fill  rounded-3xl  " alt="GTA Project" />
        </div>
        <div className="md:w-[50%] -mt-2 md:mt-0  rounded-3xl flex flex-col gap-2">
          <div className=" bg-[#18181b] rounded-3xl">
          <div className="relative w-full flex flex-col px-3">
          <h1 className="font-bold md:text-3xl text-2xl py-2 text-white s ">GTA</h1>
           <p className="md:text-xl text-sm text-[#9ca3af leading-[.9] font-semibold text-sm md:text-xl text-[#9ca3af]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nostrum, incidunt eligendi officiis odit deleniti repudiandae cumque ab deserunt minus dolores, repellat modi. Facere, ratione deleniti optio non eos fugiat voluptate at?</p>
          </div>
          <div className="w-full p-3 flex">
            <span className="px-3 py-1 bg-[#9ca3af] text-[10px] font-semibold uppercase rounded-4xl text-white/85 ">html</span>
          </div>
          </div>
        <div className="w-full bg-[#18181b] hover:bg-[#38383c] py-3 rounded-3xl flex-center">
          <img src="/public/svg/link-svgrepo-com.svg" className="size-10" alt="" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects