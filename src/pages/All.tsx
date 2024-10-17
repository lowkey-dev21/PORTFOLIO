import About from "./About";
import WorkSub from "../components/WorkSub.tsx";

const All = () => {
  return (
    <>
      <section className=" pb-[4rem] ">
        <About />
        <section className=" mx-[1.5rem] md:mx-[6rem] ">
          <WorkSub />
        </section>
      </section>
    </>
  );
};
export default All;
