import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect"
import chatapp from "@/../public/images/projects/chatapp2.png"
import dashboard from "@//../public/images/projects/dashboard-react.png"
import TextUtils from "@/../public/images/projects/Textutils-app.png"
import TodoApp from "@/../public/images/projects/Todo-app.png"
import TaskApp from "@/../public/images/projects/Task-app.png" 
import Portfo from "@/../public/images/projects/Freelancer app.png"
import Reactotp from "@/../public/images/projects/OTP page.png"
import Signup from "@/../public/images/projects/signup.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light   shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

      <div className="absolute top-0 left-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />


      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
        <span className="text-primary font-medium text-xl xs:text-base ">{type}</span>
        <div
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-dark font-bold sm:text-sm">{title}</h2>
        </div>
        <p className="my-2 font-medium dark:text-dark sm:text-sm  ">{summary}</p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg  text-light bg-dark p-2 px-6 text-lg font-semibold dark:bg-dark dark:text-light  sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0  -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <div
          
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </div>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4  text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Vectiqa | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text=" Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 md:gap-y-24 sm:gap-x-0   ">
            <div className="col-span-12">
              <FeaturedProject
                title="Dashboard"
                img={dashboard}
                summary="The Next.js and Tailwind CSS dashboard offers a sleek,user-friendly interface for data visualization and management, combining efficiency and modern design for monitoring key metrics."
                link="https://dashboard-pi-ruby.vercel.app/"
                github="https://github.com/MdAatif-Tegginmani/dashboard-react/tree/main"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Task App"
                img={TaskApp}
                summary="lorem6 adhad ajdalj ajda a jiuwoiu lak kah kab askjaj aea kfko okaoew aksejj powpo kfdka kajs ijk ka opaajadooopapod ra a dase feb we lamew awek "
                link="https://task-app-xi-vert.vercel.app/"
                github="https://github.com/MdAatif-Tegginmani/Task-App"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                img={Portfo}
                summary="lorem6 adhad ajdalj ajda a jiuwoiu lak kah kab askjaj aea kfko okaoew aksejj powpo kfdka kajs ijk ka opaajadooopapod ra a dase feb we lamew awek "
                link="https://portfolio-mdaatiftegginmani.vercel.app/"
                github="https://github.com/MdAatif-Tegginmani/Front-End-Developer"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="ChatApp"
                img={chatapp}
                summary="The Chat app with React and Node.js is a real-time messaging application that allows users to communicate with each other through a web-based interface "
                link="/"
                github="https://github.com/MdAatif-Tegginmani/ChatApp"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="TextUtils"
                img={TextUtils}
                summary="The TextUtils app is designed to provide various text manipulation tools for customizing text. It allows users to perform functions such as formatting, converting, and analyzing text with ease "
                link="https://textutils-one-peach.vercel.app/"
                github="https://github.com/MdAatif-Tegginmani/Textutils"
                type=" Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Todo App"
                img={TodoApp}
                summary=" "
                link="https://todo-pi-three.vercel.app/"
                github="https://github.com/MdAatif-Tegginmani/Todo"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React-otp Generator"
                img={Reactotp}
                summary=" "
                link="https://react-otp-form.vercel.app/"
                github="https://github.com/MdAatif-Tegginmani/react-otp-form/tree/main"
                type="Web page"
              />
            </div><div className="col-span-6 sm:col-span-12">
            <Project
              title="Signup Page"
              img={Signup}
              summary=" "
              link="https://login-plum-nine.vercel.app/signup"
              github="https://github.com/MdAatif-Tegginmani/Auth-firebase/tree/main"
              type="Web page"
            />
          </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
