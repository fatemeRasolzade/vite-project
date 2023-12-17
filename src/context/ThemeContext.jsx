import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();
const ThemeDispatchContext = createContext();

function themeReducer(theme) {
  return !theme;
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, false);
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("ThemeContext was used outside of theme provider");
  return context;
}

export function useDispatchTheme() {
  return useContext(ThemeDispatchContext);
}
