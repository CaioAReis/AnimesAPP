import { useState } from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium } from "@expo-google-fonts/ubuntu";

import { myConfig } from "../config/theme";
import ThemeContext from "../config/contexts/ThemeContext";

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const styleBar = theme === "dark" ? "light" : "dark";

  const [fontsLoaded, fontError] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  });

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeContext.Provider value={{ theme: theme!, setTheme: setTheme }}>
          <GluestackUIProvider colorMode={theme!} config={myConfig}>

            <Slot />
            <StatusBar style={styleBar} backgroundColor={myConfig.themes[theme!].colors.bg0} />

          </GluestackUIProvider>
        </ThemeContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
