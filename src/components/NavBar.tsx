import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PersonIcon from "@mui/icons-material/Person";

const navItems = [
  {
    path: "/",
    activeIcon: HomeIcon,
    inactiveIcon: HomeOutlinedIcon,
    size: 35,
  },
  {
    path: "/Favorites",
    activeIcon: BookmarksIcon,
    inactiveIcon: BookmarksOutlinedIcon,
    size: 30,
  },
  {
    path: "/Profile",
    activeIcon: PersonIcon,
    inactiveIcon: PersonOutlinedIcon,
    size: 35,
  },
];

const NavBar = () => {
  return (
    <nav className="bg-white/20 w-max px-5 py-5 backdrop-blur-sm fixed bottom-4 left-1/2 -translate-x-1/2 z-50 border border-white/50 rounded-3xl">
      <ul className="flex items-center justify-center gap-10">
        {navItems.map(
          ({
            path,
            activeIcon: ActiveIcon,
            inactiveIcon: InactiveIcon,
            size,
          }) => (
            <li key={path} className="flex items-center justify-center ">
              <NavLink to={path} className="outline-none">
                {({ isActive }) => {
                  const Icon = isActive ? ActiveIcon : InactiveIcon;
                  return <Icon sx={{ fontSize: size }} />;
                }}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
