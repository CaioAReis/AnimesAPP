import { useQuery } from "@apollo/client";
import { GET_HIGHLIGHT, GET_TRENDS } from "./queries";
import { MediaTrend } from "@/__generated__/graphql";

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

  return { ...result, trends: result?.data?.trends?.mediaTrends as MediaTrend[] };
};

export { getHighlight, getTrends, };