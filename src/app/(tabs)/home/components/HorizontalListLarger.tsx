import { FlatList } from "react-native";
import { Box, Heading } from "@gluestack-ui/themed";

import { CardLarger } from "../../../../components";
import { HorizontalListLargerProps } from "../types";

export function HorizontalListLarger({ title, list }: HorizontalListLargerProps) {

  return (
    list?.length > 0 && (
      <Box>
        <Heading ml={20} my={15}>{title}</Heading>

        <FlatList
          horizontal
          data={list}
          maxToRenderPerBatch={1}
          ListHeaderComponent={<Box w={20} />}
          ListFooterComponent={<Box w={20} />}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box w={10} />}
          renderItem={({ item }) => (
            <CardLarger
              image={item?.image}
              title={item?.title}
              duration={item?.duration}
              description={item?.description}
              onPress={() => alert("Abrir episódio")}
            />
          )}
        />
      </Box>
    )
  );
}