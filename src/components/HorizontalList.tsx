import { FlatList } from "react-native";
import { Box, Heading } from "@gluestack-ui/themed";

import { AnimeCard } from "./";
import { HorizontalListProps } from "@/app/(tabs)/home/types";

export function HorizontalList({ title, list, showPosition }: HorizontalListProps) {

  return (
    <Box>
      <Heading ml={20} my={15}>{title}</Heading>

      {list?.length && (
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
              image={item?.coverImage?.medium ?? ""}
              onPress={() => alert("Abrir Detalhes")}
              description={item?.episodes + "Episodes"}
              showPosition={showPosition ? index + 1 : null}
              title={item?.title?.english || item?.title?.romaji || ""}
            />
          )}
        />
      )}
    </Box>
  );
}