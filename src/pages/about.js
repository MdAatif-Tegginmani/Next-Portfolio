import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "@/../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect"

const about = () => {
  return (
    <>
      <Head>
        <title>Md Aatif | About Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect  />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text=" Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8   "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8   ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium    ">
              I&apos;m Md Aatif Tegginmani, a Full-Stack Developer and Automation Engineer based in Bengaluru, Karnataka. I build scalable SaaS products, workflow automation systems, and production-ready web applications that solve real business problems.
              </p>

              <p className="font-medium mt-4  ">
                With 3+ years of hands-on experience, I specialize in designing and developing modern web platforms using React, Next.js, Node.js, and API-driven architectures. My work spans system integration, automation, and end-to-end product development—taking ideas from concept through deployment with a strong focus on reliability and performance.
              </p>

              <p className="font-medium mt-4  ">
                I have built and shipped products such as Blackwaves, a digital product and consultancy platform, and EasyPlots, a smart property discovery solution—demonstrating my ability to combine engineering, automation, and user-centered design into market-ready products.
              </p>

              <p className="font-medium mt-4  ">
                My approach emphasizes clean architecture, scalable systems, and thoughtful user experience. I value clarity in communication, structured execution, and delivering solutions that create measurable impact. I enjoy collaborating with founders and teams to build products that are both technically sound and commercially viable.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePic}
                alt="Vectiqa"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
