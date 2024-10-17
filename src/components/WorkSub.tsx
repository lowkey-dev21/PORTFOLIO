import {
  expressJs,
  monogo,
  node,
  reactJs,
  typeScript,
  tailwind,
  html,
  css,
  javaScript,
  oracle,
  logistic,
} from "../assets/index.ts";

import { motion } from "framer-motion";
import AboutCom from "./AboutCom.tsx";
const WorkSub = () => {
  return (
    <>
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

      <section className=" saturate-0 opacity-50 mt-[-3rem] ">
        <AboutCom />
      </section>
    </>
  );
};
export default WorkSub;
