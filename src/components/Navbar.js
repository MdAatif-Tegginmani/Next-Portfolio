import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    console.log(router)
    return (
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();


    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>

            <nav>
                <CustomLink href='/' title="Home" className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='mx-4' />


            </nav>
            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
    */}


            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://twitter.com' target={"_blank"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-7 mx-2'
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a href='https://twitter.com' target={"_blank"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-7 mx-2'>
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://twitter.com' target={"_blank"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-7 ml-2'>
                    <LinkedInIcon />
                </motion.a>
                {/*<Link href='/' target={"_blank"}>
        
                      </Link>
                    <Link href='/' target={"_blank"}>T</Link>

                */}

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className='ml-3 flex items-center justify-center rounded-full p-1'
                >
                    {
                        mode === "dark" ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-dark"} />
                        )
                    }
                </button>
            </nav>

        </header>
    )
}

export default Navbar