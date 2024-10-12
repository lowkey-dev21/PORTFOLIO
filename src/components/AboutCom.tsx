import avatar from "../assets/avatar.jpg";
import map from "../assets/map.jpg";

const AboutCom = () => {
  return (
    <>
      <section className=" about-sec ">
        <div className="initial-card about-profile ">
          {/* Profilr */}
          <div className=" profile-items ">
            <img className=" avatar" src={avatar} alt="" />
            <h1 className=" name ">Lowkey Dev</h1>

            <p className=" info ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              debitis vero tempore in soluta, iusto natus ratione quisquam.
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
        <div className=" tools-container">
          <div className="scrolling-text "></div>
        </div>
      </section>
    </>
  );
};
export default AboutCom;
