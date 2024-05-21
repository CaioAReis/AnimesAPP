import { Star } from "lucide-react-native";
import { HStack, VStack, Heading, Icon, Text, useToken } from "@gluestack-ui/themed";

import { Maybe } from "graphql/jsutils/Maybe";

interface AnimeInfoProps {
  title?: string,
  rating?: number,
  summary?: Maybe<string>,
  year?: number | null | undefined,
  categories?: Maybe<string>[] | null,
}

export function AnimeInfo({ title, summary, rating, year, categories }: AnimeInfoProps) {
  const bg = useToken("colors", "bg0" as "amber100");
  const starColor = useToken("colors", "warn400" as "amber100");

  return (
    <VStack my={15} mx={20} space="sm">
      <Heading>{title?.toLocaleUpperCase() ?? ""}</Heading>

      {categories?.length ? (
        <Text fontSize="$sm" lineHeight="$sm" color="$text200">
          {`${year ?? ""} - ${categories?.map(category => category + ", ")}`}
        </Text>
      ) : null}

      {rating ? (
        <HStack alignItems="center" justifyContent="space-between" my={16}>
          <HStack space="md" alignItems="center">
            <Text>{rating?.toFixed(1)}</Text>
            <HStack space="xs">
              <Icon as={Star} color={starColor} fill={rating >= 1 ? starColor : bg} />
              <Icon as={Star} color={starColor} fill={rating >= 2 ? starColor : bg} />
              <Icon as={Star} color={starColor} fill={rating >= 3 ? starColor : bg} />
              <Icon as={Star} color={starColor} fill={rating >= 4 ? starColor : bg} />
              <Icon as={Star} color={starColor} fill={rating >= 5 ? starColor : bg} />
            </HStack>
          </HStack>

          {/* <Rating /> */}
        </HStack>
      ) : null}

      {summary && (
        <Text fontSize={14} color="$text300">
          {summary?.replace(/<[^>]*>?/gm, "") ?? ""}
        </Text>
      )}
    </VStack>
  );
}