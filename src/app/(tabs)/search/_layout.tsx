import { useState } from "react";
import { router } from "expo-router";
import { ActivityIndicator, FlatList, useWindowDimensions } from "react-native";
import { Box, Button, ButtonIcon, HStack, Heading, Input, InputField, InputIcon, InputSlot, useToken } from "@gluestack-ui/themed";
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
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const inputBG = useToken("colors", "bg50" as "amber100");

  const [getList, { fetchMore: getMore }] = useLazyQuery(GET_BY_CATEGORY);
  const [searchList, { fetchMore: searchMore }] = useLazyQuery(SEARCH_ANIMES);

  const handleGetSearchList = (search: string) => {
    setLoading(true);
    searchList({ variables: { search: search, page: page } }).then(result => {
      setList(result?.data?.search?.media as Media[]);
    }).finally(() => setLoading(false));

    setSearch(search);
  };

  const handleGetListByCategory = (categorySelected: string) => {
    setLoading(true);
    getList({ variables: { genre: categorySelected, page: page } }).then(result => {
      setList(result?.data?.list?.media as Media[]);
    }).finally(() => setLoading(false));

    setCategory(categorySelected);
  };

  const handleGetMore = () => {
    if (list?.length < 20 || page < 0) return;

    setLoading(true);

    if (search) {
      searchMore({ variables: { search: search, page: (page + 1) } }).then(result => {
        const resultList = result?.data?.search?.media as Media[];
        setList(prev => [...prev, ...resultList]);
        if (resultList?.length < 20) setPage(-2);
        else setPage(prev => prev + 1);
      });
    } else {
      getMore({ variables: { genre: category, page: (page + 1) } }).then(result => {
        const resultList = result?.data?.list?.media as Media[];
        setList(prev => [...prev, ...resultList]);
        if (resultList?.length < 20) setPage(-2);
        else setPage(prev => prev + 1);
      });
    }

    setLoading(false);
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
          <Heading>{category || search}</Heading>
          <Button bgColor="$error50" rounded="$full" onPress={handleClearList}>
            <ButtonIcon as={X} color="$error400" />
          </Button>
        </HStack>
      ) : (
        <Input size="lg" m={20} rounded="$lg" bgColor={inputBG}>
          <InputSlot>
            <InputIcon as={SearchICON} ml={8} />
          </InputSlot>
          <InputField
            returnKeyType="go"
            placeholder="Pesquisar"
            keyboardType="web-search"
            onSubmitEditing={e => handleGetSearchList(e.nativeEvent.text)}
          />
        </Input>
      )}

      <FlatList
        data={list}
        numColumns={3}
        onEndReachedThreshold={1}
        onEndReached={handleGetMore}
        keyExtractor={item => String(item?.id)}
        ListFooterComponent={
          loading
            ? <ActivityIndicator />
            : <Box mb={80} />
        }
        columnWrapperStyle={{ marginBottom: 15, marginHorizontal: 10, justifyContent: "space-evenly" }}
        renderItem={({ item }) => (
          <AnimeCard
            width="30%"
            image={item?.coverImage?.extraLarge || ""}
            title={item?.title?.english || item?.title?.romaji || ""}
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
        ListEmptyComponent={
          !loading ?
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
            : null
        }
      />
    </Box >
  );
}