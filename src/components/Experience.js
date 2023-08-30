import React from 'react'


const Details = ({position , company, companyLink,time,address ,work}) =>{
    return <li className='my-4 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <div >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>{position}&nbsp; <a href={companyLink}
            target='_blank'
            className='text-primary capitalize '
             >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm '>
                {work}
            </p>
        </div>
    
    </li>
} 

const Experience = () => {
  return (
    <div className='my-36'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
      Experience
    </h2>
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full   '>
   
    <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
    
   
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 md:ml-2'>
            <Details
            position='Software Developer Intern'  company='Fynsis Softlabs'
            companyLink='www.abc.com'
            time="  March 2022 - September 2022"  address='Bengaluru , India '
            work='As a software developer working on CRM and ERP systems, I have successfully completed projects involving frontend development for businesses and clients. These projects include designing and implementing user friendly interfaces for CRM functionalities such as contact management, lead tracking, and customer support.Additionally, I have contributed to building frontend solutions for ERP modules like finance and Hr using javascript and frameworks like react.js and next.js .' 
            
            />
        </ul>
    </div>
    
    </div >
  )
}

export default Experience