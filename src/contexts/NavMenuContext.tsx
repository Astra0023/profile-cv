// src/contexts/NavMenuContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type NavMenuContextType = {
  isOpen: boolean;
  activeMenu: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: (menu: string) => void;
  toggleMenu: () => void;
};

const NavMenuContext = createContext<NavMenuContextType | undefined>(undefined);

export const NavMenuProvider = ({ children }: { children: ReactNode }) => {
  // Persist sidebar open/close state
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem("nav-is-open");

    return saved ? JSON.parse(saved) : false;
  });

  // Persist active/current menu
  const [activeMenu, setActiveMenuState] = useState<string>(() => {
    return localStorage.getItem("nav-active-menu") || "home";
  });

  useEffect(() => {
    localStorage.setItem("nav-is-open", JSON.stringify(isOpen));
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem("nav-active-menu", activeMenu);
  }, [activeMenu]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const setActiveMenu = (menu: string) => {
    setActiveMenuState(menu);
  };

  return (
    <NavMenuContext.Provider
      value={{
        isOpen,
        activeMenu,
        setIsOpen,
        setActiveMenu,
        toggleMenu,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  );
};

export const useNavMenu = () => {
  const context = useContext(NavMenuContext);

  if (!context) {
    throw new Error("useNavMenu must be used inside NavMenuProvider");
  }

  return context;
};
