import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded && !fontError) return null;

  const appConfig = {
    ...config,
    tokens: {
      ...config.tokens,

      fonts: {
        mono: "Ubuntu_300Light",
        body: "Ubuntu_400Regular",
        heading: "Ubuntu_500Medium",
      },

      fontWeights: {
        bold: "normal",
        medium: "normal",
        normal: "normal",
        semibold: "normal",
      }
    }
  };

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
