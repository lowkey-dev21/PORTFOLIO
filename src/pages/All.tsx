import About from "./About";
import WorkSub from "../components/WorkSub.tsx";

const All = () => {
  return (
    <>
      <section className=" pb-[5rem]  ">
        <section className=" mt-6" >
          <About />
        </section>
        <section className=" sm:mx-[4rem] mx-[1.5rem] md:mx-[6rem] ">
          <WorkSub />
        </section>
      </section>
    </>
  );
};
export default All;
