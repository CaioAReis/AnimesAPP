// import { gql } from "@apollo/client";

import { gql } from "@/__generated__";

const GET_HIGHLIGHT = gql(`
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
`);

const GET_TRENDS = gql(`
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
`);

export {
  GET_HIGHLIGHT,
  GET_TRENDS,
};