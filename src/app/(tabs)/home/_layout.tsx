import { Box, ScrollView } from "@gluestack-ui/themed";
import { useWindowDimensions } from "react-native";

import { HorizontalList } from "@/components";
import { Highlights, MostInfoList } from "./components";
import { getComingSoon, getForYou, getHighlight, getRecommendeds, getTop10, getTrends } from "@/service/animesServices";

const popularityRandom = Math.floor(Math.random() * (750000 - 300000)) + 300000;
const currentDay = new Date().getDay();

export default function Home() {
  const { height } = useWindowDimensions();

  const { top10 } = getTop10();
  const { trends } = getTrends(currentDay + 1);
  const { highlight } = getHighlight(popularityRandom);
  const { forYou } = getForYou("Hentai");
  const { recommendeds } = getRecommendeds();
  const { comingSoon } = getComingSoon();

  return (
    <Box flex={1}>
      <ScrollView>

        {highlight && (
          <Highlights
            id={highlight?.id}
            height={height / 1.7}
            image={highlight?.coverImage?.extraLarge}
            description={[...highlight?.genres || ""].join(", ")}
            title={highlight?.title?.english || highlight?.title?.romaji}
          />
        )}

        {/* <HorizontalListLarger title="Continue Watching" list={listLarger} /> */}

        <HorizontalList title="Today's Selection" list={trends} />

        <HorizontalList title="Top 10 of the week" showPosition list={top10} />

        <MostInfoList title="For you" list={forYou} />

        <HorizontalList title="Recommendeds" list={recommendeds} />

        <HorizontalList title="Coming Soon" list={comingSoon} />

        <Box h={50} />

      </ScrollView>
    </Box>
  );
}