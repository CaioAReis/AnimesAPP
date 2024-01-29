import { Box, HStack, Heading, ScrollView } from "@gluestack-ui/themed";

import { AnimeCard } from "../../../../components";
import { AnimeCardProps } from "../../../../components/AnimeCard";

export interface HorizontalListProps {
  title: string,
  list: AnimeCardProps[],
}

export default function HorizontalList({ title, list }: HorizontalListProps) {

  return (
    <Box>
      <Heading ml={20} my={15}>{title}</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space="md">
          <Box w={10} />

          {list?.map((item, i) => (
            <AnimeCard
              key={i}
              title={item.title}
              image={item?.image}
              description={item?.description}
            />
          ))}

          <Box w={10} />
        </HStack>
      </ScrollView>
    </Box>
  );
}