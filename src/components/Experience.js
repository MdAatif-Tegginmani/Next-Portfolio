import React from 'react'


const Details = ({position , company, companyLink,time,address ,work}) =>{
    return <li className='my-4 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <div >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>{position}&nbsp; <a href={companyLink}
            target='_blank'
            className='text-primary capitalize '
             >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
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
            work='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum. Risus quis varius quam quisque id diam vel. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Augue eget arcu dictum varius duis at. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Vulputate mi sit amet mauris.' 
            
            />
        </ul>
    </div>
    
    </div >
  )
}

export default Experience