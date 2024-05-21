import { useLocalSearchParams } from "expo-router";
import { FlatList, ActivityIndicator } from "react-native";
import { Box, Divider } from "@gluestack-ui/themed";

import { getAnime } from "@/service/animesServices";
import { AnimeInfo, CoverHeader, EpisodeCard } from "./components";

export default function AnimeDetails() {
  const { id, image, name } = useLocalSearchParams<{ id: string, image: string, name: string }>();

  const { anime } = getAnime(parseInt(id!));
  
  return (
    <FlatList
      data={anime?.streamingEpisodes}
      renderItem={({ item }) => {

        const titleSplited = item?.title?.split(" - ");

        const title = titleSplited![1];
        const episode = titleSplited![0];

        return (
          <EpisodeCard
            watched={false}

            title={title ?? ""}
            episode={episode ?? ""}
            episodeMin={anime?.duration}
            thumb={item?.thumbnail ?? ""}
            onPress={() => alert("Assistir episódio")}
          />
        );
      }}

      ItemSeparatorComponent={() => <Box h={15} />}

      ListHeaderComponent={
        <>
          <CoverHeader
            imageCover={image ?? ""}
            onPlay={() => alert("Foi")}
            hiddenPlay={Boolean(anime?.streamingEpisodes?.length)}
          />

          {anime ? (
            <AnimeInfo
              title={name ?? ""}
              categories={anime?.genres}
              summary={anime?.description}
              year={anime?.startDate?.year}
              rating={(5 * (anime?.meanScore ?? 0)) / 100}
            />
          ) : <ActivityIndicator size="large" />}

          <Divider mb={20} bgColor="$bg100" />
        </>
      }

      ListFooterComponent={<Box h={70} />}
    />
  );
}