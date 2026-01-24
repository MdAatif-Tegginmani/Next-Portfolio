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
            position='Software Developer'  company='Blackwaves'
            companyLink='https://blackwaves.in/'
            time="Oct 2023 - Present"  address='Remote'
            work='Designed and engineered scalable full-stack solutions for diverse clients worldwide. Developed SaaS platforms, web applications, and mobile solutions. Led product strategy and technical architecture decisions. Implemented React, Next.js, Node.js, and cloud-based infrastructures. Collaborated with founders and product teams to deliver market-ready software solutions.'
            />

            <Details
            position='Full-Stack Developer'  company='EasyPlots'
            companyLink='https://www.easyplots.in/'
            time="June 2023 - Oct 2023"  address='Bijapur, India '
            work='Built a smart property discovery platform with interactive map search, direct owner contact, and AI-powered marketing tools. Implemented real-time data visualization, property polygon mapping, and intelligent search algorithms. Designed responsive UI/UX for buyers, sellers, and agents. Optimized platform performance and deployed production-ready features.'
            />

            <Details
            position='Software Developer Intern'  company='Fynsis Softlabs'
            companyLink='https://www.fynsis.com/'
            time="March 2022 - September 2022"  address='Bengaluru, India'
            work='Developed frontend interfaces for CRM and ERP systems serving businesses and enterprise clients. Designed and implemented user-friendly interfaces for CRM functionalities including contact management, lead tracking, and customer support. Built frontend solutions for ERP modules in finance and HR using React.js, Next.js, and modern JavaScript practices.'
            />
        </ul>
    </div>

    </div >
  )
}

export default Experience