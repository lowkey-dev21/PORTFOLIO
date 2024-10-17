import About from "./About";
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
} from "../assets/index.ts";

const All = () => {
  return (
    <>
      <section className=" pb-[4rem] " >
        <About />
        <section className={`   flex flex-col  mx-[1.1rem]  `}>
          <div className=" initial-card flex items-center justify-between p-5 rounded-[12px]   ">
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
          </div>

          <div className=" initial-card flex flex-col gap-[2rem] pb-[2rem]  justify-between mt-4 p-5 rounded-[12px] ">
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
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={typeScript}
                  alt=""
                />
                <img
                  className=" w-[30px] object-cover  h-[30px]"
                  src={tailwind}
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
          </div>
        </section>
      </section>
    </>
  );
};
export default All;
 