import React from 'react'
import { motion } from 'framer-motion';


const Skills = () => {

  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'];

  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center mb-16'>Skills</h2>
    <div className='w-full h-screen font-serif font-semibold text-5xl  flex flex-col items-center  '>
    <h2 className=" font-extrabold mb-2">Frontend Skills</h2>
    <ul className="list-none">
    {frontendSkills.map((skill, index) => (
      <motion.li
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 200 }
      }}
      className="opacity-0"
    >
          {skill}
        </motion.li>
        ))}
    </ul>

    </div>

    
    
    </>
  )
}

export default Skills