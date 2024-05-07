import { useMemo } from "react";
import { useWindowDimensions } from "react-native";
import { Box, Heading, Image, Pressable, Progress, ProgressFilledTrack, Text } from "@gluestack-ui/themed";

import { CardLargerProps } from "../config/types";

export function CardLarger({ image, title, description, duration, onPress }: CardLargerProps) {
  const { width } = useWindowDimensions();

  const _render = useMemo(() => (
    <Pressable onPress={onPress}>
      <Box
        h="$24"
        rounded="$lg"
        w={width / 2}
        overflow="hidden"
        bgColor="$blueGray200"
        justifyContent="flex-end"
      >
        <Image
          w="$full"
          h="$full"
          alt={title}
          resizeMode="cover"
          source={{ uri: image }}
        />

        {duration && (
          <Progress bgColor="$bg300" w="$full" size="xs" value={duration}>
            <ProgressFilledTrack bgColor="$primary400" />
          </Progress>
        )}
      </Box>

      <Heading fontSize="$sm" lineHeight="$sm" mx={4} numberOfLines={1}>{title}</Heading>
      {description && <Text color="$text500" fontSize="$xs" lineHeight="$xs" mx={4}>{description}</Text>}
    </Pressable>
  ), []);

  return _render;
}