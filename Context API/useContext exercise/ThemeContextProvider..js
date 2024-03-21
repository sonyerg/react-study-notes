import React from "react";

// Todo: Create & manage context in this file
export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = React.useState("light");

  function handleToggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  }

  const dynamicCtx = {
    toggleTheme: handleToggleTheme,
    theme: theme,
  };

  return (
    <ThemeContext.Provider value={dynamicCtx}>{children}</ThemeContext.Provider>
  );
}
