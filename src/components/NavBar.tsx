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
    id: "work",
    title: "Work",
    path: "/work",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
];

const NavBar = () => {
  return (
    <>
      <nav className="fixed sm:max-w-[50%] top-0 left-0 right-0 flex px-3 justify-between items-center md:w-[30%] max-w-[80%] mx-auto mt-[1rem] gap-6 p-1 md:mt-[2rem] md:p-2 md:text-xl navbar rounded-full bg-white shadow-lg">
        {navLinks.map((link) => (
          <NavLink
            className="px-4 py-2 md:p-2 rounded transition-all"
            key={link.id}
            end
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
export default NavBar;
