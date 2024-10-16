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
      <section className=" pt-[4rem]  ">
        <div className="initial-card about-profile ">
          {/* Profilr */}
          <div className=" profile-items ">
            <img className=" avatar" src={avatar} alt="" />
            <h1 className="  text-xl  ">Lowkey Dev</h1>

            <p className=" info text-justify ">
               I am a web developer fueled by creativity, thrive on building
              dynamic, responsive applications with React and Node.js.
              Passionate about turning ideas into interactive experiences.
              Driven by a love for problem-solving and seamless design.
            </p>
          </div>
        </div>

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

        {/* Tools */}
        <div className=" overflow-hidden initial-card justify-centeR items-cente  mt-[1rem] w-[90%] rounded-[20px] h-[150px] mb-3 flex flex-col mx-auto  ">
          <div className=" overflow-hidden  justify-center items-center  mt-[1rem] w-[90%] rounded-[20px] h-[150px] mb-3 flex mx-auto ">
            <Marquee speed={20} gradient={false}>
              {scroller.map((image) => (
                <>
                  <div className=" w-full  flex justify-between">
                    <img
                      key={image.title}
                      className="w-[50px] bg-white p-2 rounded-lg  object-cover  h-[50px] mx-4"
                      src={image.img}
                      alt={image.title}
                    />
                    <span></span>
                  </div>
                </>
              ))}
            </Marquee>
          </div>

          <p className=" m-4 flex flex-col  ">
            <span className=" text-[10px] text-slate-500 ">
              CURRENTLY USING
            </span>
            <span className=" text-[14px]">
              React | ExpressJs | MongoDB | Figma.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
export default AboutCom;
