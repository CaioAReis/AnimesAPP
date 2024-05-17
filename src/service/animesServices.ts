import { useQuery } from "@apollo/client";
import { Media } from "@/__generated__/graphql";

import { GET_FOR_YOU, GET_HIGHLIGHT, GET_RECOMMENDEDS, GET_TOP_LIST, GET_TRENDS } from "./queries";

//  HIGHLIGHT
const getHighlight = (popularityRandom: number) => {
  const result = useQuery(GET_HIGHLIGHT, {
    variables: {
      popularity: popularityRandom,
    }
  });

  const item = result?.data?.highlight;

  return { ...result, highlight: item };
};

//  TODAY'S SELECTION
const getTrends = (day: number) => {
  const result = useQuery(GET_TRENDS, {
    variables: {
      day: day
    }
  });

  const list = result?.data?.trends?.media as Media[];

  return { ...result, trends: list };
};

//  TOP 10
const getTop10 = () => {
  const result = useQuery(GET_TOP_LIST);

  const list = result?.data?.mostPopular?.media as Media[];

  return { ...result, top10: list };
};

//  FOR YOU
const getForYou = (genre: string) => {
  const result = useQuery(GET_FOR_YOU, {
    variables: {
      genre: genre
    }
  });

  const list = result?.data?.forYou?.media as Media[];

  return { ...result, forYou: list };
};

//  RECOMMENDEDS
const getRecommendeds = () => {
  const result = useQuery(GET_RECOMMENDEDS);

  const list = result?.data?.recommendation?.recommendations?.map(item => item?.media) as Media[];

  return { ...result, recommendeds: list };
};

export { getHighlight, getTrends, getTop10, getForYou, getRecommendeds };