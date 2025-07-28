import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import EduData from '../data/EduData';

const EducationExperience = () => {
  const [showEducation, setShowEducation] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Animate outer container
  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  // Animate content on toggle
  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }
    );
  }, [showEducation]);

  // Animate timeline items
  useGSAP(() => {
    gsap.from('.timeline-item', {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [showEducation]);

  const renderTimeline = (data) =>
    data.map((item, idx) => (
      <div key={idx} className="timeline-item relative pl-10 sm:pl-16 pb-10">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-6 top-0 w-1 h-[85%] bg-[#0D3C52] rounded-full" />

        {/* Timeline Dot with Logo */}
        <div className="absolute left-0 sm:left-1 top-0 w-8 h-8 bg-[#18181b] rounded-full border-4 border-[#0D3C52] overflow-hidden z-10 shadow-lg">
          <img src={item.logo} alt="logo" className="w-full h-full object-contain p-1" />
        </div>

        {/* Content Card */}
        <div className="bg-[#1f1f23] text-white rounded-xl p-4 ml-2 sm:ml-4 shadow-lg relative z-20">
          <p className="text-sm text-cyan-400 font-medium">{item.date}</p>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <h4 className="text-md italic text-cyan-200">{item.role}</h4>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
            {item.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ));

  return (
    <div
      ref={containerRef}
      className="bg-[#18181b] text-white p-4 sm:p-6 rounded-2xl h-full flex flex-col max-h-[80vh]"
    >
      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <button
          onClick={() => setShowEducation(true)}
          className={`px-4 py-2 rounded-lg font-semibold transition 
            ${showEducation ? 'bg-[#0D3C52] text-[#ffffff]' : 'bg-[#2c2c31] text-white'}`}
        >
          Experience
        </button>
        <button
          onClick={() => setShowEducation(false)}
          className={`px-4 py-2 rounded-lg font-semibold transition 
            ${!showEducation ? 'bg-[#0D3C52] text-[#f7f7ff]' : 'bg-[#2c2c31] text-white'}`}
        >
          Education
        </button>
      </div>

      {/* Timeline Scroll Container */}
      <div
        ref={contentRef}
        className="overflow-y-auto space-y-6 pr-2 sm:pr-4 h-fullscrollbar scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent"
      >
        {showEducation
          ? renderTimeline(EduData.experience)
          :renderTimeline(EduData.education) }
      </div>
    </div>
  );
};

export default EducationExperience;
