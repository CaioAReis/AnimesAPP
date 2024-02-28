import { Stack } from "expo-router";


export default function StackApp() {

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "white" } }}>

      <Stack.Screen name="AnimeDetails" />

    </Stack>
  );
}