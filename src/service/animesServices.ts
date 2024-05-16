import { gql, useQuery } from "@apollo/client";
const popularityRandom = Math.floor(Math.random() * (750000 - 300000)) + 300000;

const getHighlight = () => {
  const QUERY = gql`
    query GetHighlight($popularity: Int!) {
      highlight: Media (type: ANIME, popularity_greater: $popularity) {
        id
        genres
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
      },
    }
  `;

  const { loading, error, data } = useQuery(QUERY, {
    variables: { popularity: popularityRandom }
  });

  return { loading, error, data };
};

//  TODAY'S SELECTION
const getTrends = () => {
  const QUERY = gql`
    query GetTrends($day: Int!) {
      trends: Page (page: $day, perPage: 10) {
        mediaTrends {
          media {
            id
            title {
              english
              romaji
            }
            coverImage {
              medium
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(QUERY, {
    variables: { day: new Date().getDay() + 1 }
  });

  // console.warn(data.trends.mediaTrends);

  return { loading, error, data };
};

export { getHighlight, getTrends, };