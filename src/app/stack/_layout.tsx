import { useToken } from "@gluestack-style/react";
import { Stack } from "expo-router";

export default function StackApp() {
  const bg = useToken("colors", "bg0" as "amber100");

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: bg } }}>

      <Stack.Screen name="AnimeDetails" />

      <Stack.Screen name="EditProfile" />

      <Stack.Screen name="SelectProfile" />

      <Stack.Screen name="SignIn" />

      <Stack.Screen name="SignUp" />

    </Stack>
  );
}