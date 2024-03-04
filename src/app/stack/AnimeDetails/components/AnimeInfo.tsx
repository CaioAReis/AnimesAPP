import { Star } from "lucide-react-native";
import { HStack, VStack, Heading, Icon, Text } from "@gluestack-ui/themed";

interface AnimeInfoProps {
  year?: number,
  title?: string,
  rating?: number,
  summary?: string,
  categories?: string[],
}

export function AnimeInfo({ title, summary, rating, year, categories }: AnimeInfoProps) {

  return (
    <VStack my={15} mx={20} space="sm">
      <Heading>{title?.toLocaleUpperCase() ?? ""}</Heading>

      {categories?.length && (
        <Text fontSize="$sm" lineHeight="$sm">
          {`${year ?? ""} | ${categories![0]}, ${categories![1]}, ${categories![2]}, `}
        </Text>
      )}

      {rating && (
        <HStack mt={8} space="md" alignItems="center">
          <Text>{rating}</Text>
          <HStack space="xs">
            <Icon as={Star} color="$orange400" fill="$orange400" />
            <Icon as={Star} color="$orange400" fill="$orange400" />
            <Icon as={Star} color="$orange400" fill="$orange400" />
            <Icon as={Star} color="$orange400" fill="$orange400" />
            <Icon as={Star} color="$orange400" />
          </HStack>
        </HStack>
      )}

      <Text fontSize={14} numberOfLines={6} color="$textDark700">
        {summary ?? ""}
      </Text>
    </VStack>
  );
}