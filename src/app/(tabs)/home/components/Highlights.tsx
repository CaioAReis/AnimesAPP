import { Box, Button, ButtonIcon, ButtonText, HStack, Heading, Image, Text } from "@gluestack-ui/themed";
import { Heart, Play, Share } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HighlightsProps {
  height: number,
}

export default function Highlights({ height }: HighlightsProps) {

  return (
    <Box h={height} justifyContent="flex-end">
      <Image
        alt="demon slayer"
        source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.enjpg.com%2Fimg%2F2020%2Fdemon-slayer-desktop-8.jpg&f=1&nofb=1&ipt=4aca62af7b0a9a9be0549fb295ab0f8150c2a63652208498a3bfb572f97de0c4&ipo=images" }}
        h="$full" w="$full"
        position="absolute"
      />
      <LinearGradient colors={["transparent", "white"]} style={{ position: "absolute", height: "100%", width: "100%" }}>
      </LinearGradient>

      <Box px={20}>
        <Heading fontSize="$4xl" lineHeight="$4xl">
          Demon Slayer: Kimetsu no Yaiba
        </Heading>

        <Text fontSize="$sm">Action, Demons, Historical, Shounen, Supernatural</Text>

        <HStack my={8}>
          <Button bg="$red500">
            <ButtonText>PLAY</ButtonText>
            <ButtonIcon as={Play} ml={8} />
          </Button>

          <Button px={15} bg="$black" mx={10}>
            <ButtonIcon as={Heart} />
          </Button>

          <Button px={15} bg="$black">
            <ButtonIcon as={Share} />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}