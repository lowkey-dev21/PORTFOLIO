import avatar from "../assets/avatar.jpg";
import map from "../assets/map.jpg";
import Marquee from "react-fast-marquee";
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
      <section className=" pt-[4rem] md:gap-[2rem] md:mx-[6rem] md:pt-[7rem] mx-[1.5rem] pb-[2rem]  md:flex ">
        <div className=" md:w-[50%] flex flex-col  ">
          <div className="   about-profile   ">
            {/* Profilr */}
            <div className=" profile-items md:p-[1rem] ">
              <img
                className=" avatar md:h-[100px] md:w-[100px] "
                src={avatar}
                alt=""
              />
              <h1 className="  text-xl md:text-3xl  ">Lowkey Dev</h1>

              <p className=" info text-justify md:text-2xl md:py-[2rem]  ">
                I am a web developer fueled by creativity, thrive on building
                dynamic, responsive applications with React and Node.js.
                Passionate about turning ideas into interactive experiences.
                Driven by a love for problem-solving and seamless design.
              </p>
            </div>
          </div>

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
            <img className=" map-img" src={map} alt="" />
          </div>

          {/* socials */}
          <div className=" socials-container ">
            <div className=" initial-card social-items ">
              <span>
                <i className="fa-brands  fa-github"></i>
              </span>
            </div>
            <div className="initial-card social-items ">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className=" socials-container ">
            <div className=" initial-card social-items ">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="initial-card social-items ">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="  md:gap-[2rem] md:mx-[6rem]  mx-[1.5rem] pb-[2rem]  md:flex   ">
        {/* Tools */}
        <div className=" overflow-hidden initial-card   rounded-[20px] h-[150px] mb-3 flex flex-col mx-auto  ">
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
        </div>

        <div className=" md:hidden text-[12px]  overflow-hidden  justify-center  rounded-[10px] initial-card gap-3 flex w-full items-center  ">
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
      </section>
    </>
  );
};
export default AboutCom;
