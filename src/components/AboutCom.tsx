import avatar from "../assets/avatar.jpg";
import map from "../assets/map.jpg";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  css,
  fig,
  expressJs,
  github,
  html,
  javaScript,
  monogo,
  node,
  reactJs,
  typeScript,
  vs,
  tailwind,
  logistic,
  oracle,
} from "../assets/index.ts";

interface Scroller {
  title: string;
  img: string;
}
const scroller: Scroller[] = [
  {
    title: "css",
    img: css,
  },
  {
    title: "Express.Js",
    img: expressJs,
  },
  {
    title: "Figma",
    img: fig,
  },
  {
    title: "Github",
    img: github,
  },
  {
    title: "HTML",
    img: html,
  },
  {
    title: "JavaScript",
    img: javaScript,
  },
  {
    title: "MongoDB",
    img: monogo,
  },
  {
    title: "Node.Js",
    img: node,
  },
  {
    title: "React.Js",
    img: reactJs,
  },
  {
    title: "Tailwind",
    img: tailwind,
  },
  {
    title: "TypeScript",
    img: typeScript,
  },
  {
    title: "Vs Code",
    img: vs,
  },
  {
    title: "css",
    img: css,
  },
  {
    title: "Express.Js",
    img: expressJs,
  },
  {
    title: "Figma",
    img: fig,
  },
  {
    title: "Github",
    img: github,
  },
  {
    title: "HTML",
    img: html,
  },
  {
    title: "JavaScript",
    img: javaScript,
  },
  {
    title: "MongoDB",
    img: monogo,
  },
  {
    title: "Node.Js",
    img: node,
  },
  {
    title: "React.Js",
    img: reactJs,
  },
  {
    title: "Tailwind",
    img: tailwind,
  },
  {
    title: "TypeScript",
    img: typeScript,
  },
  {
    title: "Vs Code",
    img: vs,
  },
];

const AboutCom = () => {
  return (
    <>
      <section className=" pt-[6rem] md:gap-[2rem] sm:mx-[4rem] md:mx-[6rem] md:pt-[7rem] mx-[1.5rem] pb-[2rem]  md:flex ">
        <div className=" md:w-[50%] flex flex-col  ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="   about-profile   "
          >
            {/* Profile */}
            <div className=" profile-items md:p-[1rem] ">
              <img
                className=" avatar md:h-[100px] md:w-[100px] "
                src={avatar}
                alt=""
              />
              <h1 className=" mt-4 text-xl md:text-3xl  ">
                <Typewriter
                  words={[
                    "Lowkey Dev",
                    "Web Developer",
                    "Programmer",
                    "Tech Enthusiast",
                    "Lowkey Dev",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=" info  md:text-2xl md:py-[1.5rem]  "
              >
                I am a web developer fueled by creativity, thrive on building
                dynamic, responsive applications with React and Node.js.
                Passionate about turning ideas into interactive experiences.
                Driven by a love for problem-solving and seamless design.
              </motion.p>
            </div>
          </motion.div>

          <div className=" md:flex hidden text-[12px] md:text-[13px]   overflow-hidden  justify-center  rounded-[10px] initial-card gap-3  w-full items-center  ">
            <Marquee speed={50} gradient={false}>
              <div className="  flex items-center gap-3">
                <div className=" items-center p-1 flex gap-2">
                  <span className=" font-light "> PERSONAL </span>
                  <i className="fa-brands  fa-square-js"></i>
                  <span className=" font-bold"> PORTFOLIO </span>
                  <i className="fa-brands  fa-square-js"></i>

                  <span className=" font-light "> PERSONAL </span>
                  <i className="fa-brands  fa-square-js"></i>
                  <span className=" font-bold"> PORTFOLIO </span>
                  <i className="fa-brands  fa-square-js"></i>

                  <span className=" font-light "> PERSONAL </span>
                  <i className="fa-brands  fa-square-js"></i>
                  <span className=" font-bold"> PORTFOLIO </span>
                  <i className="fa-brands  fa-square-js"></i>

                  <span className=" font-light "> PERSONAL </span>
                  <i className="fa-brands  fa-square-js"></i>
                  <span className=" font-bold"> PORTFOLIO </span>
                  <i className="fa-brands  fa-square-js"></i>
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div className=" md:w-[50%]">
          {/* map */}
          <div>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className=" map-img"
              src={map}
              alt=""
            />
          </div>

          {/* socials */}
          <div className=" socials-container ">
            <motion.a
              initial={{ x: "-50vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className=" initial-card social-items "
              href="https://github.com/lowkey-dev21https://github.com/lowkey-dev21/"
            >
              <i className="fa-brands  fa-github"></i>
            </motion.a>

            <motion.a
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="initial-card social-items "
              href="https://www.instagram.com/low.key_dev?igsh=MWl4NXk5OTJ2aXBmNw%3D%3D&utm_source=qrhttps://www.instagram.com/low.key_dev?igsh=MWl4NXk5OTJ2aXBmNw%3D%3D&utm_source=qr"
            >
              <i className="fa-brands text-red-500 fa-instagram"></i>
            </motion.a>
          </div>

          <div className=" socials-container ">
            <motion.div
              drag
              dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 100,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className=" initial-card social-items "
            >
              <i className="fa-brands text-green-500  fa-whatsapp"></i>
            </motion.div>

            <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="initial-card social-items "
              href="https://x.com/lowkey1921?s=21https://x.com/lowkey1921?s=21"
            >
              <i className="fa-brands text-blue-500 fa-twitter"></i>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="  md:gap-[2rem] md:mx-[6rem] sm:mx-[4rem]  mx-[1.5rem] pb-[2rem]  md:flex   ">
        {/* Tools */}
        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" overflow-hidden initial-card   rounded-[20px] h-[150px] mb-3 flex flex-col mx-auto  "
        >
          <div className=" overflow-hidden md justify-center items-center  mt-[1rem] w-[95%] h-[300px] mb-3 flex mx-auto ">
            <Marquee speed={20} gradient={false}>
              {scroller.map((image) => (
                <>
                  <div className=" w-full   flex justify-between">
                    <img
                      key={image.title}
                      className="w-[50px] bg-white p-2 rounded-lg  object-cover  h-[50px] mx-4"
                      src={image.img}
                      alt={image.title}
                    />
                  </div>
                </>
              ))}
            </Marquee>
          </div>

          <p className=" m-4 flex flex-col  ">
            <span className=" text-[10px] text-slate-500 ">
              CURRENTLY USING
            </span>
            <span className=" text-[14px] md:text-[16px] ">
              React | ExpressJs | MongoDB | Figma.
            </span>
          </p>
        </motion.div>

        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" md:hidden text-[12px]  overflow-hidden  justify-center  rounded-[10px] initial-card gap-3 flex w-full items-center  "
        >
          <Marquee speed={50} gradient={false}>
            <div className="  flex items-center gap-3">
              <div className=" items-center p-1 flex gap-2">
                <span className=" font-light "> PERSONAL </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-bold"> PORTFOLIO </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-light "> PERSONAL </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-bold"> PORTFOLIO </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-light "> PERSONAL </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-bold"> PORTFOLIO </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-light "> PERSONAL </span>
                <i className="fa-brands  fa-square-js"></i>
                <span className=" font-bold"> PORTFOLIO </span>
                <i className="fa-brands  fa-square-js"></i>
              </div>
            </div>
          </Marquee>
        </motion.div>
      </section>

      <section className=" saturate-0 opacity-50  mx-[2rem] md:mx-[12rem]  ">
        {/* overlay */}
        <div className=" fixed  w-full h-[100%] z-10  mt-2 bg-none "></div>
        <section className=" md:flex md:justify-between gap-4 items-start flex-row-reverse   ">
          <div className=" md:w-[50%]  md:flex md:flex-col justify-between   gap-3  ">
            <motion.div
              whileInView={{ x: [200, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" md:h-[100px]  initial-card flex items-center justify-between p-5 rounded-[12px]   "
            >
              <p className=" flex flex-col">
                <span className=" text-[10px]   text-gray-600">2024 CV</span>
                RESUME
              </p>

              <div className=" flex gap-2  justify-center flex-row items-center  ">
                <i className=" text-[#4b5563] fa-solid text-2xl fa-file-export"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4b5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ scale: [0.5, 1.2, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8, bounce: 0.4 }}
              className=" gap-3 hidden md:flex flex-col justify-between initial-card p-3  mt-[1rem] md:mt-0 rounded-[10px]   "
            >
              <img
                src={logistic}
                className=" shadow-xl rounded-[10px]  w-full h-max-[350px]"
                alt=""
              />

              <div>
                <p className=" flex gap-3  text-2xl">
                  <a href="https://lowkey-logistic.vercel.app/">
                    LOWKEY LOGISTIC WEBSITE
                  </a>
                  <span>
                    <a href="https://lowkey-logistic.vercel.app/">
                      <i className=" text-blue-500 fa-solid fa-link"></i>
                    </a>
                  </span>{" "}
                </p>

                <p className=" flex gap-2 mt-2">
                  <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] font-bold">
                    Figma
                  </span>
                  <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] font-bold">
                    Reactjs
                  </span>
                  <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] font-bold">
                    Tailwind
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            whileInView={{ rotateY: [180, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className=" md:w-[50%] initial-card flex flex-col gap-[2rem] md:py-[3.5rem]  pb-[2rem]  justify-between md:mt-0 mt-4 p-5 rounded-[12px] "
          >
            <p className=" flex flex-col">
              <span className="text-[10px]   text-gray-600">3 YEARS OF</span>
              <span>EXPERIENCE</span>
            </p>

            <div className=" flex justify-between items-center">
              <p className="  flex flex-col">
                <span className="text-[10px]   text-gray-600">
                  2024 - Present
                </span>
                <span className="text-xl "> MERN Stack</span>
              </p>

              <p className=" flex gap-1 ">
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={monogo}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={expressJs}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={reactJs}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={node}
                  alt=""
                />
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className=" flex flex-col">
                <span className="text-[10px]   text-gray-600">2024-2024</span>
                <span className=" line-through text-xl text-gray-500 ">
                  Jr. Back-End Enginner
                </span>
              </p>
              <p className=" flex gap-1 saturate- ">
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={node}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={expressJs}
                  alt=""
                />

                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={monogo}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={typeScript}
                  alt=""
                />
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className=" flex flex-col">
                <span className="text-[10px]   text-gray-600">2022-2023</span>
                <span className=" line-through text-xl text-gray-500 ">
                  Jr. Front-End Enginner
                </span>
              </p>
              <p className=" flex gap-1 saturate- ">
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={javaScript}
                  alt=""
                />

                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={reactJs}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={tailwind}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={typeScript}
                  alt=""
                />
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className=" flex flex-col">
                <span className="text-[10px]   text-gray-600">2021-2022</span>
                <span className=" line-through text-xl text-gray-500 ">
                  Beginner
                </span>
              </p>
              <p className=" flex gap-1 saturate- ">
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={html}
                  alt=""
                />

                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={css}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={javaScript}
                  alt=""
                />
              </p>
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div
            whileInView={{ scale: [0.5, 1.2, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, bounce: 0.4 }}
            className=" cursor-pointer gap-3 md:hidden flex flex-col justify-between initial-card p-3  mt-[1rem] md:mt-0 rounded-[10px]   "
          >
            <img
              src={logistic}
              className=" shadow-xl rounded-[10px]  w-full h-max-[350px]"
              alt=""
            />

            <div>
              <p className=" flex gap-3  md:text-2xl">
                <a href="https://lowkey-logistic.vercel.app/">
                  LOWKEY LOGISTIC WEBSITE
                </a>
                <span>
                  <a href="https://lowkey-logistic.vercel.app/">
                    <i className=" text-blue-500 fa-solid fa-link"></i>
                  </a>
                </span>{" "}
              </p>

              <p className=" flex gap-2 mt-2">
                <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] ">
                  Figma
                </span>
                <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] ">
                  Reactjs
                </span>
                <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] ">
                  Tailwind
                </span>
              </p>
            </div>
          </motion.div>
        </section>

        <section className=" md:flex  md:mt-3 md:gap-5 ">
          <motion.div
            whileInView={{ scale: [0.5, 1.2, 1], opacity: [0, 1] }}
            transition={{ duration: 1, bounce: 0.3 }}
            className=" md:w-[50%] cursor-pointer gap-3  flex flex-col justify-between initial-card p-3  mt-[1rem] md:mt-0 rounded-[10px]   "
          >
            <img
              src={oracle}
              className=" shadow-xl rounded-[10px]  w-full h-max-[300px]"
              alt=""
            />

            <div>
              <p className=" flex gap-3  md:text-2xl">
                <a href="https://oracle-heals-pj53ucwyl-lowkeys-projects-d620b88b.vercel.app/">
                  LOWKEY LOGISTIC WEBSITE
                </a>
                <span>
                  <a href="https://oracle-heals-pj53ucwyl-lowkeys-projects-d620b88b.vercel.app/">
                    <i className=" text-blue-500 fa-solid fa-link"></i>
                  </a>
                </span>{" "}
              </p>

              <p className=" flex gap-2 mt-2">
                <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] ">
                  Figma
                </span>
                <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] ">
                  Reactjs
                </span>
                <span className=" bg-gray-300 p-1 px-2 rounded-full text-[10px] ">
                  Tailwind
                </span>
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
};
export default AboutCom;
