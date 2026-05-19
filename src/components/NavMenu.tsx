import { NavLink } from "react-router-dom";
import { useNavMenu } from "../contexts/NavMenuContext";

const NavMenu = () => {
  const { setActiveMenu } = useNavMenu();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-gray-300 ${isActive ? "text-yellow-400 font-bold" : ""}`;

  return (
    <div className="bg-gray-800 text-white p-4 .t">
      <nav>
        <ul className="flex space-x-4 ms-10">
          <li>
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setActiveMenu("home")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={linkClass}
              onClick={() => setActiveMenu("projects")}
            >
              Projects
            </NavLink>
          </li>
          {/* 
          <li>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setActiveMenu("about")}
            >
              About
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
