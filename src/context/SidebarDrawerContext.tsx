import { useState, createContext, ReactNode } from "react";

type SidebarDrawerProviderProps = {
  children: ReactNode;
};

type SidebarDrawerContextProps = {
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  isOpenSidebar: boolean;
};

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function handleOpenSidebar() {
    setIsOpenSidebar(true);
  }

  function handleCloseSidebar() {
    setIsOpenSidebar(false);
  }

  return (
    <SidebarDrawerContext.Provider
      value={{
        handleOpenSidebar,
        handleCloseSidebar,
        isOpenSidebar,
      }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
}
