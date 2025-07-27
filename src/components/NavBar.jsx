

import { motion } from 'framer-motion';

import { NavLink } from 'react-router';


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    

 
 
  return (
    <nav  >
     <div  className ={"h-22 flex-center "}>
    <div   className="flex justify-center gap-4 md:gap-6 py-2 px-3 mt-4 rounded-2xl text-white fixed top-0 z-50 transition-all duration-300 ease-in-out bg-[#18181B]">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="relative font-medium"
          end
        >
          {({ isActive }) => (
            <div className="relative px-3 py-1">
              {isActive && (
                <motion.div
                  layoutId="active-box"
                  className="absolute inset-0 rounded-xl bg-white/10 border  backdrop-blur-md"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 px-3 py-1 text-sm md:text-base">
                {item.name}
              </span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
    </div>
    </nav>
  );
};

export default Navbar;