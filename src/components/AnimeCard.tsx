import { Box, Heading, Image, Text } from "@gluestack-ui/themed";

export interface AnimeCardProps {
  image: string,
  title: string,
  description: string,
}

export default function AnimeCard({ image, title, description }: AnimeCardProps) {

  return (
    <Box w="$32" mr={20}>
      <Image
        h="$48"
        w="$full"
        alt={title}
        rounded="$lg"
        source={{ uri: image }}
      />
      <Heading numberOfLines={1} fontSize="$sm" lineHeight="$sm">{title}</Heading>
      <Text fontSize="$xs" numberOfLines={1}>{description}</Text>
    </Box>
  );
}