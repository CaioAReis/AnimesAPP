import { Moon, Sun } from "lucide-react-native";
import { Button, ButtonIcon, useToken } from "@gluestack-ui/themed";
import { useCallback, useContext } from "react";
import ThemeContext from "@/config/contexts/ThemeContext";

export function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  const iconColor = useToken("colors", "bg600" as "amber100");

  const handleChangeTheme = useCallback(() => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }, []);

  return (
    <Button onPress={handleChangeTheme} w="$10" rounded="$full" bgColor="transparent">
      <ButtonIcon as={ThemeIcon} size="xl" color={iconColor} />
    </Button>
  );
}