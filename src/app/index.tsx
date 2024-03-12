import { Redirect } from "expo-router";
import { Center, Heading } from "@gluestack-ui/themed";

export default function Start() {
  return <Redirect href="/stack/SelectProfile" />;

  return (
    <Center flex={1}>

      <Heading>TELA DE LOGIN</Heading>

    </Center>
  );
}