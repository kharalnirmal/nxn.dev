import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Contacts = () => {
  useGSAP(()=>{
    const t1 = gsap.timeline();
    t1.from(".mail",{opacity:0, x:-100 , duration:0.7,ease:"expo.in"})
     .from(".github",{opacity:0,y:-50,duration:0.7 ,ease:"expo.in" },"-=0.3")
     .from(".linkedin",{opacity:0,x:100, duration:0.7 , ease:"expo.in"},"<")
  })
  return (
    <section className='md:w-[50%] w-[70%] mx-auto h-[calc(100vw-100px) ] text-white'>
      <div className='flex flex-col md:flex-row w-full '>
        <div className='flex flex-col  gap-2 p-2 md:w-[50%]'>
          <div className='mail bg-[#18181b] p-4  h-[15vh] md:h-[30vh] rounded-xl flex-center  '>
            <a className=" rounded-xl bg-[#6f7379] p-3  flex flex-center " target='_blank' href="mailto: nirmalkharal40@gmail.com">
              <img src="/svg/email-svgrepo-com.svg" className='size-3 mr-1' alt="" />
              <div className="flex flex-row md:flex-col lg:flex-row">
                 <h1 className='text-xs md:text-sm  '>nirmalkharal</h1> <span className="text-xs md:text-sm" > 40@gmail.com</span>
              </div>
             
            </a>
          </div>
            <a className="relative github bg-[#18181b] p-4  h-[30vh]  flex-center rounded-xl  flex col-center hover:bg-[#212124] text-wrap gap-3" target='_blank'  href="https://github.com/kharalnirmal">
              <img src="/svg/github-142-svgrepo-com.svg" className='size-14 mb-4' alt="" />
              <h1 className='relative text-3xl md:text-4xl font-semibold text-center  '>Github Profile</h1>
              <p className='relative  text-sm md:text-lg text-[#9ca3af] text-center -top-2 '>Find more of my repositories</p>
            </a>
        </div>
        <div className=' linkedin md:w-[50%] p-2'>
<a className="bg-[#18181b] p-4 h-[18vh] md:h-full  flex-center rounded-xl  flex col-center hover:bg-[#212124] gap-3" target='_blank'  href="https://www.linkedin.com/in/kharalnirmal/">
              <img src="/svg/linkedin-rounded-svgrepo-com.svg" className='size-14 mb-4' alt="" />
            </a>
        </div>
         
      </div>
    </section>
  )
}

export default Contacts