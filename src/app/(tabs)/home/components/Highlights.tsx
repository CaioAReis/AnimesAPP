import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Play, Share } from "lucide-react-native";
import { Box, Button, ButtonIcon, ButtonText, HStack, Heading, Image, Text } from "@gluestack-ui/themed";

import { HighlightsProps } from "../types";

export function Highlights({ height, image, title, description }: HighlightsProps) {

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

        <HStack my={8} space="md">
          <Button rounded="$full" bg="$primary400" onPress={() => router.push("/stack/AnimeDetails")}>
            <ButtonText>PLAY</ButtonText>
            <ButtonIcon as={Play} ml={8} />
          </Button>

          <Button rounded="$full" w={40} h={40} bg="$black">
            <ButtonIcon as={Heart} />
          </Button>

          <Button rounded="$full" w={40} h={40} bg="$black">
            <ButtonIcon as={Share} />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}