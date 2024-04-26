import { Dispatch, SetStateAction, createContext } from "react";

interface ThemeContextProps {
  theme: "dark" | "light",
  setTheme: Dispatch<SetStateAction<"light" | "dark" | null | undefined>>,
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default ThemeContext;