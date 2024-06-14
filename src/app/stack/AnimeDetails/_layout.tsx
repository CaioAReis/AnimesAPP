import { useLocalSearchParams } from "expo-router";
import { Box, Divider } from "@gluestack-ui/themed";
import { FlatList, ActivityIndicator } from "react-native";

import { useFavorited } from "@/hooks";
import { getAnime } from "@/service/animesServices";
import { AnimeInfo, CoverHeader, EpisodeCard } from "./components";

export default function AnimeDetails() {
  const { id, image, name } = useLocalSearchParams<{ id: string, image: string, name: string }>();

  const { anime } = getAnime(parseInt(id!));
  const { favorited, handleFavorite } = useFavorited({
    anime: {
      id: parseInt(id!),
      title: { english: name ?? "" },
      coverImage: { extraLarge: image }
    }
  });

  return (
    <FlatList
      data={anime?.streamingEpisodes}
      ListFooterComponent={<Box h={70} />}
      ItemSeparatorComponent={() => <Box h={15} />}
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
      ListHeaderComponent={
        <>
          <CoverHeader
            favorited={favorited}
            imageCover={image ?? ""}
            onPlay={() => alert("Foi")}
            onFavorite={handleFavorite}
            onShare={() => alert("Compartilhar")}
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
    />
  );
}