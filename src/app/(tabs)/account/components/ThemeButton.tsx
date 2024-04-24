import { Moon } from "lucide-react-native";
import { Button, ButtonIcon } from "@gluestack-ui/themed";

export function ThemeButton() {

  const handleChangeTheme = () => {

    alert("Alterar Tema");

  };

  return (
    <Button onPress={handleChangeTheme} w="$10" rounded="$full" bgColor="transparent">
      <ButtonIcon as={Moon} size="xl" color="$bg600" />
    </Button>
  );
}