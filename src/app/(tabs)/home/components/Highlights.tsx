import { router } from "expo-router";
import { ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Play, Share } from "lucide-react-native";
import { Box, Button, ButtonIcon, ButtonText, HStack, Heading, Image, Text, useToken, Icon } from "@gluestack-ui/themed";

import { HighlightsProps } from "../types";
import { ANIMES_SERVICES } from "@/service";

export function Highlights({ height }: HighlightsProps) {
  const bg = useToken("colors", "bg0" as "amber100");
  const { loading, data } = ANIMES_SERVICES.getHighlight();

  const highlight = data?.highlight;

  return (
    <Box h={height} justifyContent="flex-end">
      {(!loading && highlight) ? (
        <>
          {highlight?.coverImage.extraLarge && (
            <Image
              h="$full" w="$full"
              position="absolute"
              source={{ uri: highlight?.coverImage.extraLarge }}
              alt={highlight?.title.english || highlight?.title.romaji}
            />
          )}

          <LinearGradient
            colors={["transparent", `${bg}60`, bg]}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />

          <Box px={20}>
            <Heading numberOfLines={2} fontSize="$4xl" lineHeight="$4xl">
              {highlight?.title.english || highlight?.title.romaji}
            </Heading>

            <Text numberOfLines={1} fontSize="$sm" color="$text400">
              {[...highlight?.genres || ""].join(", ")}
            </Text>

            <HStack my={8} space="md">
              <Button rounded="$full" bg="$primary400" onPress={() => router.push("/stack/AnimeDetails")}>
                <ButtonText color={bg}>PLAY</ButtonText>
                <Icon color={bg} fill={bg} as={Play} ml={8} />
              </Button>

              <Button rounded="$full" w={40} h={40} bg="$bg950">
                <Icon as={Heart} color={bg} fill={bg} />
              </Button>

              <Button rounded="$full" w={40} h={40} bg="$bg950">
                <ButtonIcon as={Share} color={bg} />
              </Button>
            </HStack>
          </Box>
        </>
      ) : <ActivityIndicator size="large" style={{ flex: 1 }} />}
    </Box>
  );
}