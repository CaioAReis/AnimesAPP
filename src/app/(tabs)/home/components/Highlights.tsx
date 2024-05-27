import { Suspense } from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Play, Share } from "lucide-react-native";
import { Box, Button, ButtonIcon, ButtonText, HStack, Heading, Image, Text, useToken, Icon } from "@gluestack-ui/themed";

import { Loading } from "@/components";
import { HighlightsProps } from "../types";

export function Highlights({ id, height, image, title, description }: HighlightsProps) {
  const bg = useToken("colors", "bg0" as "amber100");

  return (
    <Suspense fallback={<Loading />}>
      <Box h={height} justifyContent="flex-end">
        <>
          {image && (
            <Image
              alt={title || ""}
              h="$full" w="$full"
              position="absolute"
              source={{ uri: image }}
            />
          )}

          <LinearGradient
            colors={["transparent", `${bg}60`, bg]}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />

          <Box px={20}>
            <Heading numberOfLines={2} fontSize="$4xl" lineHeight="$4xl">
              {title}
            </Heading>

            <Text numberOfLines={1} fontSize="$sm" color="$text400">
              {/* {[...highlight?.genres || ""].join(", ")} */}
              {description}
            </Text>

            <HStack my={8} space="md">
              <Button rounded="$full" bg="$primary400"
                onPress={() => router.push({
                  pathname: "/stack/AnimeDetails",
                  params: {
                    id: id,
                    name: title,
                    image: image,
                  },
                })}
              >
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
      </Box>
    </Suspense>
  );
}