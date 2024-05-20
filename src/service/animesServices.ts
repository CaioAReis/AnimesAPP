import { useQuery } from "@apollo/client";
import { Media } from "@/__generated__/graphql";

import {
  GET_ANIME,
  GET_TRENDS,
  GET_FOR_YOU,
  GET_TOP_LIST,
  GET_HIGHLIGHT,
  GET_COMING_SOON,
  GET_RECOMMENDEDS,
} from "./queries";

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

//  COMING SOON
const getComingSoon = () => {
  const result = useQuery(GET_COMING_SOON);

  const list = result?.data?.comingSoon?.media as Media[];

  return { ...result, comingSoon: list };
};

//  GET ANIME
const getAnime = (id: number) => {
  const result = useQuery(GET_ANIME, 
    { 
      variables: { 
        id: id 
      } 
    }
  );

  const anime = result?.data?.anime;

  return { ...result, anime: anime };
};

export {
  getTop10,
  getAnime,
  getTrends,
  getForYou,
  getHighlight,
  getComingSoon,
  getRecommendeds,
};