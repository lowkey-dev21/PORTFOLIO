import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className=" w-full ">
        <span className=" container-bg ">
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className=" first-bg "
          ></motion.span>
          <span className=" second-bg  "></span>
          <span className=" third-bg  "></span>
          <span className=" fourth-bg  "></span>
          <span className=" fifth-bg "></span>
          <span className=" sixth-bg  "></span>
        </span>
        <NavBar />
        <Outlet />
      </section>
    </>
  );
};
export default Home;
