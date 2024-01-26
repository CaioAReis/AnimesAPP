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
        <HStack>
          <Box w={20} />

          {list?.map((item, i) => (
            <AnimeCard
              key={i}
              title={item.title}
              image={item?.image}
              description={item?.description}
            />
          ))}

        </HStack>
      </ScrollView>
    </Box>
  );
}