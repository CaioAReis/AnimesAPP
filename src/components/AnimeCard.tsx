import { Box, Heading, Image, Text } from "@gluestack-ui/themed";

import { AnimeCardProps } from "../types";

export function AnimeCard({ image, title, description, height, width }: AnimeCardProps) {

  return (
    <Box w={width as "$32" ?? "$32"}>
      <Image
        w="$full"
        alt={title}
        rounded="$lg"
        source={{ uri: image }}
        h={height as "$48" ?? "$48"}
      />
      <Heading numberOfLines={1} fontSize="$sm" lineHeight="$sm">{title}</Heading>
      {description && (
        <Text fontSize="$xs" numberOfLines={1}>{description}</Text>
      )}
    </Box>
  );
}