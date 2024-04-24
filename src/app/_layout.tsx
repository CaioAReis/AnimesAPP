import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium } from "@expo-google-fonts/ubuntu";

import { appConfig } from "../config/theme";

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  });

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <GluestackUIProvider config={appConfig}>
          <Slot />
          <StatusBar style="auto" />
        </GluestackUIProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
