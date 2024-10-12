import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const Home = () => {
  return (
    <>
      <section>
        <span className=" container-bg ">
          <span className=" first-bg"></span>
          <span className=" second-bg"></span>
          <span className=" third-bg"></span>
          <span className=" fourth-bg"></span>
          <span className=" fifth-bg"></span>
          <span className=" sixth-bg"></span>
        </span>
        <NavBar />
        <Outlet />
      </section>
    </>
  );
};
export default Home;
