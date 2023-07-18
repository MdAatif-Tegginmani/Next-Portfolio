import React from 'react'


const Details = ({type ,time, place , info}) =>{
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
        <div >
            <h3 className='capitalize font-bold text-2xl '>{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
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
    <h2 className='font-bold text-8xl mb-32 w-full text-center'>
      Education
    </h2>
    <div className='w-[75%] mx-auto relative'>
   
    <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />
    
   
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
            type='Bachelor of Engineering' 
            time=" 2017-2021"  place=' BLDEs V P Dr PG Halakatti College of Engineering & Technology '
            info='Lorem ipsum dolor sit amet, sed do et la aliquam quisqu vel. Luctu venenatis lectus magna fringilla urna porttitor rhoncus dolor. Augue eget arcu dictum varius duis at. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Vulputate mi sit amet mauris.' 
            
            />
            
          
        </ul>
    </div>
    
    </div >
  )
}

export default Education