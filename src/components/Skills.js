// import React from 'react'
// import { motion } from 'framer-motion';


// const Skills = () => {

//   const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'];

//   return (
//     <>
//     <h2 className='font-bold text-8xl mt-64 w-full text-center mb-16'>Skills</h2>
//     <div className='w-full h-screen font-serif font-semibold text-5xl  flex flex-col items-center  '>
//     <h2 className=" font-extrabold mb-2">Frontend Skills</h2>
//     <ul className="list-none">
//     {frontendSkills.map((skill, index) => (
//       <motion.li
//       key={index}
//       initial={{ opacity: 0, y: -20 }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, delay: index * 0.5, type: 'spring', stiffness: 200 }
//       }}
//       className="opacity-0"
//     >
//           {skill}
//         </motion.li>
//         ))}
//     </ul>

//     </div>



//     </>
//   )
// }

// export default Skills
import Image from "next/image";
import Html from '@/../public/images/icons/htmlLogo.png';
import Css from '@/../public/images/icons/cssLogo.png';
import Javascript from '@/../public/images/icons/javascriptLogo.png';
import ReactLogo from '@/../public/images/icons/reactLogo.png';
import Node from "@/../public/images/icons/node.png"
import Mysql from "@/../public/images/icons/mysql.png"

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center mb-16'>Skills</h2>
      
        <div className="grid grid-cols-5 justify-center  items-center text-center gap-4 py-4 px-20 text-lg">
          <div className="p-10 cursor-pointer flex flex-col justify-center items-center">
            <div className=" transform transition-transform duration-500 hover:translate-x-[-20px]">
              <Image
                src={Html}
                alt=""
              
               
              />
            </div>
            <h3 className="text-gray-800 mt-2">HTML 5</h3>
          </div>

          <div className="p-10 cursor-pointer flex flex-col justify-center items-center">
            <div className="rounded-full bg-white  transform transition-transform duration-500 hover:translate-x-[-20px]">
              <Image
                src={Css}
                alt=""
               
                
              />
            </div>
            <h3 className="text-gray-800 mt-2">CSS3</h3>
          </div>

          <div className="p-10 cursor-pointer  flex flex-col justify-center items-center">
            <div className="rounded-full  bg-white  transform transition-transform duration-500 hover:translate-x-[-20px]">
              <Image
                src={Javascript}
                alt=""
               
                
              />
            </div>
            <h3 className="text-gray-800 mt-2">JavaScript</h3>
          </div>

          <div className="p-10 cursor-pointer  flex flex-col justify-center items-center">
            <div className="rounded-full  bg-white  transform transition-transform duration-500 hover:translate-x-[-20px]">
              <Image
                src={ReactLogo}
                alt=""
             
              />
            </div>
            <h3 className="text-gray-800 mt-2">React</h3>
          </div>

          <div className="p-10 cursor-pointer  flex flex-col justify-center items-center">
            <div className="rounded-full bg-white  transform transition-transform duration-500 hover:translate-x-[-20px]">
              <Image
                src={Mysql}
                alt=""
             
                
              />
            </div>
            <h3 className="text-gray-800 mt-2">MySql</h3>
          </div>
          <div className="p-2 cursor-pointer  flex flex-col justify-center items-center">
            <div className="rounded-full  bg-white  transform transition-transform duration-500 hover:translate-x-[-20px]">
              <Image
                src={Node}
                alt=""
             
                
              />
            </div>
            <h3 className="text-gray-800 mt-2">Node</h3>
          </div>
        </div>
      </>
  );
};

export default Skills;
