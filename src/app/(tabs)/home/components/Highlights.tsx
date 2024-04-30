import { router } from "expo-router";
import { Heart, Play, Share } from "lucide-react-native";
import { Box, Button, ButtonIcon, ButtonText, HStack, Heading, Image, Text, useToken } from "@gluestack-ui/themed";

import { HighlightsProps } from "../types";
import { LinearGradient } from "expo-linear-gradient";

export function Highlights({ height, image, title, description }: HighlightsProps) {
  const bg = useToken("colors", "bg0" as "amber100");

  return (
    <Box h={height} justifyContent="flex-end">
      <Image
        alt={title}
        h="$full" w="$full"
        position="absolute"
        source={{ uri: image }}
      />

      <LinearGradient
        colors={["transparent", bg]}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />

      <Box px={20}>
        <Heading fontSize="$4xl" lineHeight="$4xl">
          {title}
        </Heading>

        <Text fontSize="$sm" color="$text400">{description}</Text>

        <HStack my={8} space="md">
          <Button rounded="$full" bg="$primary400" onPress={() => router.push("/stack/AnimeDetails")}>
            <ButtonText color="$bg0">PLAY</ButtonText>
            <ButtonIcon color="$bg0" as={Play} ml={8} />
          </Button>

          <Button rounded="$full" w={40} h={40} bg="$bg950">
            <ButtonIcon as={Heart} color="$bg0" />
          </Button>

          <Button rounded="$full" w={40} h={40} bg="$bg950">
            <ButtonIcon as={Share} color="$bg0" />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}