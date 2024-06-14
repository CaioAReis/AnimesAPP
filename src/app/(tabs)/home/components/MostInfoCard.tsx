import { useContext, useMemo } from "react";
import { Heart, Play } from "lucide-react-native";
import { useWindowDimensions } from "react-native";
import { Box, Button, Icon, HStack, Heading, Image, Text, useToken, Pressable } from "@gluestack-ui/themed";

import { useFavorited } from "@/hooks";
import { MostInfoCardProps } from "../types";
import ThemeContext from "@/config/contexts/ThemeContext";

export function MostInfoCard({ id, title, image, categories, description, onPress }: MostInfoCardProps) {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);
  const bg = useToken("colors", "bg0" as "amber100");

  const { favorited, handleFavorite } = useFavorited({
    anime: {
      id: id,
      title: { english: title ?? "" },
      coverImage: { extraLarge: image }
    }
  });

  const _render = useMemo(() => (
    <Box w={width} px={20} mb={10}>
      <Pressable onPress={onPress} softShadow="1" shadowColor="$bg0" backgroundColor="$bg50" w="$full" rounded="$lg" overflow="hidden">
        <Box h="$40" w="$full">
          <Image
            h="$full"
            w="$full"
            alt="teste"
            source={{ uri: image }}
          />

          <HStack space="sm" position="absolute" bottom={-12} right={20}>
            <Button rounded="$full" w={50} h={50} bg="$primary400">
              <Icon as={Play} color={bg} fill={bg} size="xl" />
            </Button>

            <Button onPress={handleFavorite} rounded="$full" w={50} h={50} bg="$primary400">
              <Icon as={Heart} color={bg} fill={favorited ? bg : "transparent"} size="xl" />
            </Button>
          </HStack>
        </Box>

        <Heading numberOfLines={1} fontSize="$md" mx={10} mt={10}>{title}</Heading>
        <Text mx={10} numberOfLines={1} fontSize="$sm" lineHeight="$sm" color="$blueGray500">
          {categories}
        </Text>

        <Text m={10} fontSize="$sm" lineHeight="$sm" numberOfLines={4}>
          {description?.replace(/<[^>]*>?/gm, "")}
        </Text>
      </Pressable>
    </Box>
  ), [theme, favorited]);

  return _render;
}