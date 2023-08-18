import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
        <Layout className='py-8 flex items-center justify-between  lg:flex-col lg:py=6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            

            <Link href='/' className='underline underline-offset-2 lg:py-2'>Say hello</Link>

        
        </Layout>
    </footer>
  )
}

export default Footer