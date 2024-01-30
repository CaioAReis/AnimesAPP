import { FlatList } from "react-native";
import { Box, Heading } from "@gluestack-ui/themed";

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

      <FlatList
        horizontal
        data={list}
        maxToRenderPerBatch={3}
        ListHeaderComponent={<Box w={20} />}
        ListFooterComponent={<Box w={20} />}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box w={10} />}
        renderItem={({ item }) => (
          <AnimeCard
            title={item.title}
            image={item?.image}
            description={item?.description}
          />
        )}
      />

    </Box>
  );
}