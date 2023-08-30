// export default Skills
import Image from "next/image";
import Html from "@/../public/images/icons/htmlLogo.png";
import Css from "@/../public/images/icons/cssLogo.png";
import Javascript from "@/../public/images/icons/javascriptLogo.png";
import ReactLogo from "@/../public/images/icons/reactLogo.png";
import Node from "@/../public/images/icons/nodejs.png";
import Mysql from "@/../public/images/icons/mysql.png";
import Next from "@/../public/images/icons/nextjs.png";
import Framer from '@/../public/images/icons/framer.png'

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center items-center text-center mx-4 sm:mx-2 md:mx-16 p-44 md:p-12 lg:p-20 xl:p-32 text-base md:text-lg lg:text-xl dark:bg-light dark:bg-opacity-75 dark:rounded-3xl ">
      <div className="p-12 cursor-pointer justify-center items-center">
          <div className=" transform transition-transform duration-500 hover:translate-y-[-20px]">
            <Image src={Html} alt="" />
          </div>
        </div>

        <div className="p-12 cursor-pointer  justify-center items-center">
          <div className=" transform transition-transform duration-500 hover:translate-y-[-20px]">
            <Image src={Css} alt="" />
          </div>
        </div>

        <div className="p-12 cursor-pointer  justify-center items-center">
          <div className="  transform transition-transform duration-500 hover:translate-y-[-20px]">
            <Image src={Javascript} alt="" />
          </div>
        </div>

        <div className="p-12 cursor-pointer  justify-center items-center">
          <div className="  transform transition-transform duration-500 hover:translate-y-[-20px]">
            <Image src={ReactLogo} alt="" />
          </div>
        </div>

        <div className="p-12 cursor-pointer  justify-center items-center">
          <div className="  transform transition-transform duration-500 hover:translate-y-[-20px]">
            <Image src={Mysql} alt="" />
          </div>
        </div>
        <div className="p-12 cursor-pointer justify-center items-center">
          <div className="  transform transition-transform duration-500 hover:translate-y-[-20px]">
            <Image src={Node} alt="" />
          </div>
        </div>
        <div className="p-12 cursor-pointer  justify-center items-center ">
          <div className="   transform transition-transform duration-500 hover:translate-y-[-20px] ">
            <Image src={Next} alt="" />
          </div>
        </div>
        <div className="p-20 md:p-16 lg:p-16 cursor-pointer justify-center items-center    ">
          <div className="  transform transition-transform duration-500 hover:translate-y-[-20px] bg-opacity-5  ">
            <Image src={Framer} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
