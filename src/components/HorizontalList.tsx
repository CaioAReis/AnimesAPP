import { FlatList } from "react-native";
import { Box, Heading } from "@gluestack-ui/themed";

import { AnimeCard } from "./";
import { HorizontalListProps } from "@/app/(tabs)/home/types";

export function HorizontalList({ title, list, showPosition }: HorizontalListProps) {

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
        ItemSeparatorComponent={() => <Box w={showPosition ? 20 : 10} />}
        renderItem={({ item, index }) => (
          <AnimeCard
            title={item.title}
            image={item?.image}
            description={item?.description}
            onPress={() => alert("Abrir Detalhes")}
            showPosition={showPosition ? index + 1 : null}
          />
        )}
      />
    </Box>
  );
}