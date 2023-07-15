import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
    <Link
    href={link}
    target="_blank"
    className="w-full cursor-pointer overflow-hidden rounded-lg"
  >
    <Image src={img} alt={title} className="w-full h-auto" />
  </Link>

  <div className="w-full flex flex-col items-start justify-between pl-6">
    <span className="text-primary font-medium text-xl">{type}</span>
    <Link
      href={link}
      target="_blank"
      className="hover:underline underline-offset-2"
    >
      <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
    </Link>
    <div className="mt-2 flex items-center ">
      <Link href={github} target="_blank" className="w-10">
        <GithubIcon />
      </Link>

    </div>
  </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center ">
         
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Vectiqa | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text=" Imagination Trumps Knowledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="ChatApp"
                img={project1}
                summary="lorem6 adhad ajdalj ajda a jiuwoiu lak kah kab askjaj aea kfko okaoew aksejj powpo kfdka kajs ijk ka opaajadooopapod ra a dase feb we lamew awek "
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6">
            <Project
                title="ChatApp"
                img={project1}
                summary="lorem6 adhad ajdalj ajda a jiuwoiu lak kah kab askjaj aea kfko okaoew aksejj powpo kfdka kajs ijk ka opaajadooopapod ra a dase feb we lamew awek "
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
