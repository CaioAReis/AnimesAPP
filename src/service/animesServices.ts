import { useQuery } from "@apollo/client";
import { Media } from "@/__generated__/graphql";

import { GET_FOR_YOU, GET_HIGHLIGHT, GET_TOP_LIST, GET_TRENDS } from "./queries";

//  HIGHLIGHT
const getHighlight = (popularityRandom: number) => {
  const result = useQuery(GET_HIGHLIGHT, {
    variables: {
      popularity: popularityRandom,
    }
  });

  return { ...result, highlight: result?.data?.highlight };
};

//  TODAY'S SELECTION
const getTrends = (day: number) => {
  const result = useQuery(GET_TRENDS, {
    variables: {
      day: day
    }
  });

  return { ...result, trends: result?.data?.trends?.media as Media[] };
};

//  TOP 10
const getTop10 = () => {
  const result = useQuery(GET_TOP_LIST);

  return { ...result, top10: result?.data?.mostPopular?.media as Media[] };
};

//  FOR YOU
const getForYou = (genre: string) => {
  const result = useQuery(GET_FOR_YOU, {
    variables: {
      genre: genre
    }
  });

  return { ...result, forYou: result?.data?.forYou?.media  as Media[]};
};

export { getHighlight, getTrends, getTop10, getForYou };