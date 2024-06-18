import { Dispatch, ReactNode, SetStateAction } from "react";
import ThemeContext from "./ThemeContext";

interface Props {
  children: ReactNode,
  theme: "dark" | "light",
  setTheme: Dispatch<SetStateAction<"light" | "dark" | null | undefined>>,
}

export default function Providers({ theme, setTheme, children }: Props) {

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}