import { useState } from "react";
import { ActivityIndicator, FlatList, useWindowDimensions } from "react-native";
import { Box, HStack, Heading, Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed";
import { Axe, BookHeart, Castle, Drama, Footprints, Hourglass, Laugh, Medal, Palmtree, Rocket, Search as SearchICON, Sofa, Swords } from "lucide-react-native";

import { AnimeCard } from "@/components";
import { CategoryCard } from "./components";
import { useLazyQuery } from "@apollo/client";
import { Media } from "@/__generated__/graphql";
import { GET_BY_CATEGORY } from "@/service/queries";

const categories = [
  { title: "Adventure", icon: Palmtree, color: "$green" },
  { title: "Action", icon: Swords, color: "$orange" },
  { title: "Comedy", icon: Laugh, color: "$cyan" },
  { title: "Fantasy", icon: Castle, color: "$pink" },
  { title: "Drama", icon: Drama, color: "$purple" },
  { title: "Family", icon: Sofa, color: "$red" },
  { title: "Mystery", icon: Footprints, color: "$blue" },
  { title: "History", icon: Hourglass, color: "$amber" },
  { title: "Romance", icon: BookHeart, color: "$teal" },
  { title: "Sport", icon: Medal, color: "$fuchsia" },
  { title: "Sci-fi", icon: Rocket, color: "$emerald" },
  { title: "Thriller", icon: Axe, color: "$violet" },
];

export default function Search() {
  const { width } = useWindowDimensions();
  const [list, setList] = useState<Media[]>([]);

  const [getList, { loading }] = useLazyQuery(GET_BY_CATEGORY);

  // const handleGetSearchList = (search: string) => {

  //   console.warn(search);

  // };

  const handleGetListByCategory = (category: string) => {
    getList({ variables: { genre: category } }).then(result => {
      setList(result?.data?.list?.media as Media[]);
    });
  };

  return (
    <Box flex={1}>
      <Input size="lg" m={20} rounded="$lg" bgColor="$bg50">
        <InputSlot>
          <InputIcon as={SearchICON} ml={8} />
        </InputSlot>
        <InputField placeholder="Pesquisar" />
      </Input>

      {loading ? <ActivityIndicator size="large" style={{ marginVertical: 60 }} /> : (
        list?.length ? (
          <FlatList
            data={list}
            numColumns={3}
            ListFooterComponent={<Box h={60} />}
            columnWrapperStyle={{ marginBottom: 15, marginHorizontal: 10, justifyContent: "space-evenly" }}
            renderItem={({ item }) => (
              <AnimeCard
                width="30%"
                image={item?.coverImage?.extraLarge || ""}
                title={item?.title?.english || item?.title?.romaji || ""}
              />
            )}
          />
        ) : (
          <Box>
            <Heading mx={20} fontSize="$2xl">Categorias</Heading>
            <HStack mt={20} px={20} space="md" justifyContent="center" flexWrap="wrap">
              {categories?.map((item, i) => (
                <CategoryCard
                  key={i}
                  height={width / 3}
                  width={width / 3.6}
                  color={item?.color}
                  title={item?.title}
                  IconCard={item?.icon}
                  onPress={() => handleGetListByCategory(item?.title)}
                />
              ))}
            </HStack>
          </Box>
        )
      )}
    </Box>
  );
}