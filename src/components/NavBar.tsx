import { NavLink } from "react-router-dom";

interface Nav {
  id: string;
  title: string;
  path?: string | any;
}

const navLinks: Nav[] = [
  {
    id: "all",
    title: "All",
    path: ".",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
  {
    id: "work",
    title: "Work",
    path: "/work",
  },
];

const NavBar = () => {
  return (
    <>
      <nav className=" navbar ">
        {navLinks.map((link) => (
          <>
            <NavLink to={link.path} className="nav-container" key={link.id} end>
              <span className="navbar-bar">{link.title}</span>
            </NavLink>
          </>
        ))}
      </nav>
    </>
  );
};
export default NavBar;
