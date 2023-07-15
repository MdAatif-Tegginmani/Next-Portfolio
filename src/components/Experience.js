import React from 'react'


const Details = ({position , company, companyLink,time,address ,work}) =>{
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
        <div >
            <h3 className='capitalize font-bold text-2xl '>{position}&nbsp; <a href={companyLink}
            target='_blank'
            className='text-primary capitalize '
             >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full '>
                {work}
            </p>
        </div>
    
    </li>
} 

const Experience = () => {
  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center'>
      Experience
    </h2>
    <div className='w-[75%] mx-auto relative'>
   
    <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />
    
   
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
            position='Jr Software Developer' company='Fynsis Softlabs'
            companyLink='www.abc.com'
            time="   2022-2023"  address='Bengaluru , India '
            work='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum. Risus quis varius quam quisque id diam vel. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Augue eget arcu dictum varius duis at. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Vulputate mi sit amet mauris.' 
            
            />
        </ul>
    </div>
    
    </div >
  )
}

export default Experience