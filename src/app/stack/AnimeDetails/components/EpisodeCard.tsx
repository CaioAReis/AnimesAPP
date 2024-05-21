import { Eye } from "lucide-react-native";
import { Heading, Icon, Text, Box, HStack, VStack, Image, Pressable } from "@gluestack-ui/themed";

import { EpisodeCardProps } from "../types";

export function EpisodeCard({ thumb, title, episode, episodeMin, watched, onPress }: EpisodeCardProps) {
  const watchedColor = watched ? "$primary100" : "transparent";

  return (
    <Pressable mx={20} onPress={onPress}>
      <HStack maxHeight={90} space="md" bgColor={watchedColor} rounded="$md">
        <Box minHeight={90} w="40%" bgColor="$blueGray200" rounded="$md" overflow="hidden">
          <Image
            w="$full" h="$full"
            source={{ uri: thumb }}
            alt={`Thumb of episode ${episode}`}
          />
        </Box>

        <Box flex={1} justifyContent="center">
          <VStack space="xs">
            <Heading fontSize="$sm" numberOfLines={2} lineHeight="$sm">
              {title?.toUpperCase()}
            </Heading>

            {episode ? (
              <Text fontSize="$xs" lineHeight="$sm" color="$text300">
                {episode}
              </Text>
            ) : null}

            <HStack alignItems="center" justifyContent="space-between">
              {episodeMin ? (
                <Text fontSize="$xs" lineHeight="$sm" color="$primary600">
                  {episodeMin} min
                </Text>
              ) : null}

              {watched && <Icon as={Eye} mr={10} color="$primary600" size="lg" />}
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </Pressable>
  );
}