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
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-center max-w-[80%] mx-auto mt-[1rem] gap-6 p-1 navbar rounded-full bg-white shadow-lg">
        {navLinks.map((link) => (
          <NavLink
            className="px-4 py-2 rounded hover:rounded-full hover:bg-gray-200 transition-all"
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
