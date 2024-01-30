import { Box, Button, ButtonIcon, ButtonText, HStack, Heading, Image, Text } from "@gluestack-ui/themed";
import { Heart, Play, Share } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HighlightsProps {
  image: string,
  title: string,
  height: number,
  description: string,
}

export default function Highlights({ height, image, title, description }: HighlightsProps) {

  return (
    <Box h={height} justifyContent="flex-end">
      <Image
        alt={title}
        h="$full" w="$full"
        position="absolute"
        source={{ uri: image }}
      />

      <LinearGradient
        colors={["transparent", "white"]}
        style={{ position: "absolute", height: "100%", width: "100%" }}
      />

      <Box px={20}>
        <Heading fontSize="$4xl" lineHeight="$4xl">
          {title}
        </Heading>

        <Text fontSize="$sm">{description}</Text>

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