import { FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ChevronDownIcon } from "lucide-react-native";
import {
  Box,
  Icon,
  Select,
  HStack,
  SelectItem,
  SelectInput,
  SelectPortal,
  SelectContent,
  SelectTrigger,
  SelectBackdrop,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
} from "@gluestack-ui/themed";

import { AnimeInfo, CoverHeader, EpisodeCard } from "./components";
import { useEffect } from "react";
import { getAnime } from "@/service/animesServices";
// import { useLayoutEffect } from "react";

const list = [
  {
    thumb: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.38iq2AFFIP_d8Hylw5gCsQHaEK%26pid%3DApi&f=1&ipt=5e48657ff26505c0401e774ecb99d80143f1fee31c20ffd136cdb2152be6bcd3&ipo=images",
    title: "The other side of sea",
    watched: true,
    episodeMin: 24,
  },

  {
    thumb: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.38iq2AFFIP_d8Hylw5gCsQHaEK%26pid%3DApi&f=1&ipt=5e48657ff26505c0401e774ecb99d80143f1fee31c20ffd136cdb2152be6bcd3&ipo=images",
    title: "The other side of sea",
    watched: false,
    episodeMin: 24,
  },

  {
    thumb: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.38iq2AFFIP_d8Hylw5gCsQHaEK%26pid%3DApi&f=1&ipt=5e48657ff26505c0401e774ecb99d80143f1fee31c20ffd136cdb2152be6bcd3&ipo=images",
    title: "The other side of sea",
    watched: false,
    episodeMin: 24,
  },

  {
    thumb: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.38iq2AFFIP_d8Hylw5gCsQHaEK%26pid%3DApi&f=1&ipt=5e48657ff26505c0401e774ecb99d80143f1fee31c20ffd136cdb2152be6bcd3&ipo=images",
    title: "The other side of sea",
    watched: false,
    episodeMin: 24,
  },

  {
    thumb: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.38iq2AFFIP_d8Hylw5gCsQHaEK%26pid%3DApi&f=1&ipt=5e48657ff26505c0401e774ecb99d80143f1fee31c20ffd136cdb2152be6bcd3&ipo=images",
    title: "The other side of sea",
    watched: false,
    episodeMin: 24,
  },
];

export default function AnimeDetails() {
  const { id, image, name } = useLocalSearchParams<{ id: string, image: string, name: string }>();

  useEffect(() => {
    
    const { anime } = getAnime(parseInt(id));

  }, []);

  console.warn(id);

  return (
    <FlatList
      data={list}
      renderItem={({ item, index }) => (
        <EpisodeCard
          title={item.title}
          thumb={item.thumb}
          episode={index + 1}
          watched={item.watched}
          episodeMin={item.episodeMin}
          onPress={() => alert("Assistir episódio")}
        />
      )}

      ItemSeparatorComponent={() => <Box h={15} />}

      ListHeaderComponent={
        <>
          <CoverHeader
            imageCover={image ?? ""}
            onPlay={() => alert("Foi")}
          />

          <AnimeInfo
            title={name ?? ""}
            year={anime?.startDate?.year}
            rating={(5 * anime?.meanScore) / 100}
            categories={["Action", "Deamons", "Adventure"]}
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />

          <HStack m={20} justifyContent="space-between">
            <Select w="$full" defaultValue="Season 01">
              <SelectTrigger variant="underlined" size="lg">
                <SelectInput placeholder="Select option" />
                <Icon as={ChevronDownIcon} mr={8} />
              </SelectTrigger>

              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>

                  <SelectItem label="Season 01" value="1" />
                  <SelectItem label="Season 02" value="2" />
                  <SelectItem label="Season 03" value="3" />
                  <SelectItem label="Season 04" value="4" />
                  <SelectItem label="Season 05" value="5" />

                  <Box h={40} />
                </SelectContent>
              </SelectPortal>
            </Select>
          </HStack>
        </>
      }

      ListFooterComponent={<Box h={70} />}
    />
  );
}