import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("Wes Anderson");

  const contextValue = {
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
