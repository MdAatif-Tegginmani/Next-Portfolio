import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "@/../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
    return (
        <>
            <Head>
                <title>Vectiqa | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text=" Passion Fuels Purpose! " className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores adipisci doloribus dolore molestias fugiat similique rem cumque iusto deleniti cupiditate deserunt! Repellat, debitis labore!
                            </p>

                           
                            <p className="font-medium my-4">
                                Whether Im working on a website, mobile app, or other digital
                                product, I bring my commitment to design excellence and
                                user-centered thinking to every project I work on. I look
                                forward to the opportunity to bring my skills and passion to
                                your next project.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                        <Image
                            src={ProfilePic}
                            alt="Vectiqa"
                            className="w-full h-auto rounded-2xl"
                        />
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark">
                            </div>
                            
                        </div>
                    </div>
                    <Skills/>
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;