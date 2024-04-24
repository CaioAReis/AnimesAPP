import { Link } from "expo-router";
import { useWindowDimensions } from "react-native";
import { LogIn, UserRoundPlus } from "lucide-react-native";
import { Button, ButtonText, Icon } from "@gluestack-ui/themed";
import { Box, Divider, Image, VStack } from "@gluestack-ui/themed";

export default function Start() {
  const { height } = useWindowDimensions();

  return (
    <Box flex={1}>
      <Box flex={1}>
        <Box w="$full" h={height / 3} bgColor="$blueGray400">
          <Image
            alt="Image 01"
            resizeMode="cover"
            w="$full" h="$full"
            source={require("../../assets/images/img_01.png")}
          />
        </Box>

        <Divider bgColor="$bg0" h={4} />

        <Box flexDirection="row" w="$full" h={height / 3}>
          <VStack flex={1}>
            <Image
              w="$full"
              alt="Image 02"
              resizeMode="cover"
              flex={1} bgColor="$blueGray400"
              source={require("../../assets/images/img_02.png")}
            />

            <Divider bgColor="$bg0" h={4} />

            <Image
              w="$full"
              alt="Image 03"
              resizeMode="cover"
              flex={1} bgColor="$blueGray400"
              source={require("../../assets/images/img_03.png")}
            />
          </VStack>

          <Divider bgColor="$bg0" w={4} />

          <Image
            alt="Image 04"
            w="60%" h="$full"
            bgColor="$blueGray400"
            source={require("../../assets/images/img_04.png")}
          />
        </Box>

        <Divider bgColor="$bg0" h={4} />

        <Box flexDirection="row" flex={1} bgColor="$bg0">
          <Image
            alt="Image 05"
            resizeMode="cover"
            w="60%" h="$full"
            bgColor="$blueGray400"
            source={require("../../assets/images/img_05.png")}
          />

          <Divider bgColor="$bg0" w={4} />

          <Image
            h="$full"
            flex={1}
            alt="Image 06"
            resizeMode="cover"
            bgColor="$blueGray400"
            source={require("../../assets/images/img_06.png")}
          />
        </Box>
      </Box>

      <Box w="$full" h="$full" position="absolute" bgColor="#00000099">
        <VStack flex={1} px={20} justifyContent="space-evenly">
          <Image
            alt="Logo app"
            w="60%" h="8%"
            alignSelf="center"
            resizeMode="contain"
            source={require("../../assets/images/logo_light.png")}
          />

          <VStack w="$full" space="2xl">
            <Link href="stack/SignIn" asChild>
              <Button elevation={4} bgColor="$primary400" borderRadius="$full">
                <ButtonText color="$text100" mx={20}>Sign In</ButtonText>
                <Icon as={LogIn} color="$text100" />
              </Button>
            </Link>

            <Link href="stack/SignUp" asChild>
              <Button variant="outline" borderColor="$primary400" elevation={4} borderRadius="$full">
                <ButtonText color="$primary400" mx={20}>Sign Up</ButtonText>
                <Icon as={UserRoundPlus} color="$primary400" />
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}