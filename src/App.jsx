import { use, useRef, useState } from "react"
import Home from "./pages/Home"
import Loader from "./pages/Loader"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";


const App = () => {
  const [isloading, setIsLoading] = useState(false);
  const HomeRef = useRef(null);
  const LoaderRef = useRef(null);

  const handelLoaderComplete = () => {
    // This function is passed to Loader
    gsap.to(LoaderRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
      onComplete: () => setIsLoading(true),
    });
  };
  useGSAP(() => {
    if (isloading && HomeRef.current) {
gsap.from(HomeRef.current, {
  opacity:0,
  duration: 1,
  ease: "power1.inOut",
})
    }
  }, [isloading])


  return (
    <main>
     
    <div className="relative h-screen w-screen overflow-hidden ">
      <div>
      {isloading? (
        <div ref={LoaderRef}>
          <Loader onComplete={handelLoaderComplete } />
        </div>
      ) : (
        <div ref={HomeRef}>
           <NavBar />
          <Routes>
         <Route path ="/" element={<Home />} />
         <Route path ="/projects" element={<Projects/>} /> 
         <Route path ="/contact" element={<Contacts/>} /> 
          </Routes>

        </div>
      )}
    </div>
    </div>
    </main>
  )
}

export default App
