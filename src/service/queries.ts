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
      media (type:  ANIME, sort: TRENDING_DESC) {
        id
        episodes
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`);

const GET_TOP_LIST = gql(`
  query GetTop {
    mostPopular: Page (page: 1, perPage: 10) {
      media (type: ANIME, sort: POPULARITY_DESC) {
        id
        episodes
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`);

const GET_FOR_YOU = gql(`
  query GetForYou($genre: String!) {
    forYou: Page (page: 1, perPage: 5) {
      media (type: ANIME, genre: $genre, sort: TRENDING_DESC) {
        id
        genres
        description
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`);

const GET_RECOMMENDEDS = gql(`
  query GetRecommendeds {
    recommendation: Page (page: 1, perPage: 12) {
      recommendations (sort: RATING_DESC) {
        media {
          id
          episodes
          title {
            english
            romaji
          }
          coverImage {
            extraLarge
          }
        }
      }
    }
  }
`);

const GET_COMING_SOON = gql(`
  query GetComingSoon {
    comingSoon: Page (page: 1, perPage: 14) {
      media (type:  ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {
        id
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    },
  }
`);

const GET_ANIME = gql(`
  query GetAnime($id: Int!) {
    anime: Media (id: $id) {
      genres
      meanScore
      description
      startDate {
        year 
      }
      streamingEpisodes {
        title
        thumbnail
      }
    }
  }
`);

export {
  GET_ANIME,
  GET_TRENDS,
  GET_FOR_YOU,
  GET_TOP_LIST,
  GET_HIGHLIGHT,
  GET_COMING_SOON,
  GET_RECOMMENDEDS,
};