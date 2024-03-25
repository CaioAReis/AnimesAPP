import { Stack } from "expo-router";


export default function StackApp() {

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "white" } }}>

      <Stack.Screen name="AnimeDetails" />

      <Stack.Screen name="SelectProfile" />

      <Stack.Screen name="SignIn" />

      <Stack.Screen name="SignUp" />


    </Stack>
  );
}