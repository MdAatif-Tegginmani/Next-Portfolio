import React from 'react'


const Details = ({type ,time, place , info}) =>{
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] '>
        <div >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>{type}</h3>
            <span className=' font-medium text-dark/75  dark:text-light/90 capitalize xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full '>
                {info}
            </p>
        </div>
    
    </li>
} 

const Education = () => {
  return (
    <div className='mt-32'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
      Education
    </h2>
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
   
    <div className='absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
    
   
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 md:ml-2'>
            <Details
            type='Bachelor of Engineering' 
            time=" 2017-2021"  place=' BLDEs V P Dr PG Halakatti College of Engineering & Technology '
            info='Alumni of an esteemed engineering institution, graduating in Mechanical Engineering in 2021. The program provided a comprehensive education in mechanical principles and problem-solving, shaping a strong foundation for my career.' 
            
            />
            
          
        </ul>
    </div>
    
    </div >
  )
}

export default Education