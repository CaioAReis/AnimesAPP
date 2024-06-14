import { useLazyQuery, useQuery } from "@apollo/client";
import { Media } from "@/__generated__/graphql";

import {
  GET_ANIME,
  GET_TRENDS,
  GET_FOR_YOU,
  GET_TOP_LIST,
  GET_HIGHLIGHT,
  SEARCH_ANIMES,
  GET_COMING_SOON,
  GET_BY_CATEGORY,
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

  const anime = result?.data?.anime as Media;

  return { ...result, anime: anime };
};

//  SEARCH ANIMES
const searchAnimes = (search: string, page: number) => {
  const result = useQuery(SEARCH_ANIMES,
    {
      variables: {
        search: search, page: page
      }
    }
  );

  const list = result?.data?.search?.media as Media[];

  return { ...list, search: list };
};

//  GET BY CATEGORY
const getByCategory = (category: string | null, page: number) => {
  if (category) {
    const [getList, result] = useLazyQuery(GET_BY_CATEGORY,
      {
        variables: {
          genre: category, page: page
        }
      }
    );

    const list = result?.data?.list?.media as Media[];

    return [getList, { ...result, list: list }];
  }
};

export {
  getTop10,
  getAnime,
  getTrends,
  getForYou,
  getHighlight,
  searchAnimes,
  getComingSoon,
  getByCategory,
  getRecommendeds,
};