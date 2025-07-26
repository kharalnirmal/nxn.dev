import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Loader = ({onComplete}) => {
  const countRef = useRef(null);

  useGSAP(() => {
    const obj = { count: 0 };

    gsap.to(obj, {
      count: 100,
      duration: 4,
      ease: "power1.inOut",
      onUpdate: () => {
        if (countRef.current) {
          const value = Math.min(100, Math.floor(obj.count));
          countRef.current.textContent = `${value}%`;
        }
      },
      onComplete : ()=>{
        if (onComplete) {
          onComplete();
        }
      } 
    });
  }, []);

  return (
    <section className="h-full w-full bg-black">
      <div className="abs-center col-center overflow-hidden">
        <DotLottieReact
          src="https://lottie.host/d210b3fd-4f36-42a2-8b13-43541592534c/3WLqTe9fC1.lottie"
          loop
          autoplay
          className="scale-[2] md:-mb-9 md:scale-[1.4] object-cover"
        />
        <p className="w-full md:mt-0 mt-6 text-nowrap text-center md:text-4xl text-white text-xl italic animate-pulse">
          A quiet moment in the forest of creation
        </p>
      </div>

  
      <h1
        ref={countRef}
        className="z-1000 italic px-12 py-5 text-7xl md:text-9xl font-bold h-[100vh] w-full text-white fixed flex justify-end items-end"
      >
        0%
      </h1>
    </section>
  );
};

export default Loader;
