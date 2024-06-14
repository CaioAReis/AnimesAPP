import { router } from "expo-router";
import { FlatList } from "react-native";
import { Heart } from "lucide-react-native";
import { Center, HStack, Heading, Icon, Text, VStack, Box } from "@gluestack-ui/themed";

import { AnimeCard } from "@/components";
import { useLibralyStore } from "@/store/libraryStore";

export default function Library() {
  const { favorites: list } = useLibralyStore();

  return (
    <FlatList
      data={list}
      numColumns={3}
      ListFooterComponent={<Box h={60} />}
      columnWrapperStyle={{ marginBottom: 15, marginHorizontal: 10, justifyContent: "space-evenly" }}
      ListHeaderComponent={(
        <HStack alignItems="center" mx={20} my={25}>
          <Icon as={Heart} size="xl" mr={10} />
          <Heading>Favorites</Heading>
        </HStack>
      )}
      ListEmptyComponent={(
        <Center flex={1} mt="40%">
          <VStack alignItems="center" space="lg">
            <Icon as={Heart} size={"40" as "xl"} />
            <Heading>Nothing here</Heading>
            <Text>Your favorites list is still empty!</Text>
          </VStack>
        </Center>
      )}
      renderItem={({ item }) => (
        <AnimeCard
          width="30%"
          title={item?.title?.english || ""}
          image={item?.coverImage?.extraLarge || ""}
          onPress={() => router.push({
            pathname: "/stack/AnimeDetails",
            params: {
              id: item?.id,
              image: item?.coverImage?.extraLarge,
              name: item?.title?.english || item?.title?.romaji,
            },
          })}
        />
      )}
    />
  );
}