import { Outlet } from "react-router";
import NavMenu from "./NavMenu";
import { NavMenuProvider } from "../contexts/NavMenuContext";

const MainLayout = () => {
  return (
    <NavMenuProvider>
      <NavMenu />
      <div className="container mx-auto px-4 mt-5">
        <Outlet />
      </div>
    </NavMenuProvider>
  );
};

export default MainLayout;
