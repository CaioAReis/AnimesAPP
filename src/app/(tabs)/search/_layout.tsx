import { useState } from "react";
import { ActivityIndicator, FlatList, useWindowDimensions } from "react-native";
import { Box, Button, ButtonIcon, HStack, Heading, Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed";
import { Axe, BookHeart, Castle, Drama, Footprints, Hourglass, Laugh, Medal, Palmtree, Rocket, Search as SearchICON, Sofa, Swords, X } from "lucide-react-native";

import { AnimeCard } from "@/components";
import { CategoryCard } from "./components";
import { useLazyQuery } from "@apollo/client";
import { Media } from "@/__generated__/graphql";
import { GET_BY_CATEGORY, SEARCH_ANIMES } from "@/service/queries";

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
  const [page, setPage] = useState(1);
  const { width } = useWindowDimensions();
  const [list, setList] = useState<Media[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  const [searchList, { loading: loadingSearch }] = useLazyQuery(SEARCH_ANIMES);
  const [getList, { loading: loadingList, fetchMore: getMore }] = useLazyQuery(GET_BY_CATEGORY);

  const handleGetSearchList = (search: string) => {
    searchList({ variables: { search: search, page: page + 1 } }).then(result => {
      setList(result?.data?.search?.media as Media[]);
    });
  };

  const handleGetListByCategory = (categorySelected: string) => {
    getList({ variables: { genre: categorySelected, page: page } }).then(result => {
      setList(result?.data?.list?.media as Media[]);
    });

    setCategory(categorySelected);
  };

  const handleGetMore = () => {
    getMore({ variables: { genre: category, page: page + 1 } }).then(result => {
      const resultList = result?.data?.list?.media as Media[];
      setList(prev => [...prev, ...resultList]);
    });

    setPage(prev => prev + 1);
  };

  const handleClearList = () => {
    setPage(1);
    setList([]);
    setCategory(null);
  };

  return (
    <Box flex={1}>
      {list?.length > 0 ? (
        <HStack mx={20} my={10} alignItems="center" justifyContent="space-between">
          <Heading>{category}</Heading>
          <Button bgColor="$error50" rounded="$full" onPress={handleClearList}>
            <ButtonIcon as={X} color="$error400" />
          </Button>
        </HStack>
      ) : (
        <Input size="lg" m={20} rounded="$lg" bgColor="$bg50">
          <InputSlot>
            <InputIcon as={SearchICON} ml={8} />
          </InputSlot>
          <InputField placeholder="Pesquisar" />
        </Input>
      )}

      {list?.length ? (
        <FlatList
          data={list}
          numColumns={3}
          onEndReachedThreshold={1.5}
          onEndReached={handleGetMore}
          keyExtractor={item => String(item?.id)}
          ListFooterComponent={
            (loadingList || loadingSearch)
              ? <ActivityIndicator size="large" style={{ marginVertical: 60 }} />
              : <Box h={60} />
          }
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
      )}
    </Box>
  );
}