/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetHighlight($popularity: Int!) {\n    highlight: Media (type: ANIME, popularity_greater: $popularity) {\n      id\n      genres\n      title {\n        english\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n    },\n  }\n": types.GetHighlightDocument,
    "\n  query GetTrends($day: Int!) {\n    trends: Page (page: $day, perPage: 10) {\n      media (type:  ANIME, sort: TRENDING_DESC) {\n        id\n        episodes\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n": types.GetTrendsDocument,
    "\n  query GetTop {\n    mostPopular: Page (page: 1, perPage: 10) {\n      media (type: ANIME, sort: POPULARITY_DESC) {\n        id\n        episodes\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n": types.GetTopDocument,
    "\n  query GetForYou($genre: String!) {\n    forYou: Page (page: 1, perPage: 5) {\n      media (type: ANIME, genre: $genre, sort: TRENDING_DESC) {\n        id\n        genres\n        description\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n": types.GetForYouDocument,
    "\n  query GetRecommendeds {\n    recommendation: Page (page: 1, perPage: 12) {\n      recommendations (sort: RATING_DESC) {\n        media {\n          id\n          episodes\n          title {\n            english\n            romaji\n          }\n          coverImage {\n            extraLarge\n          }\n        }\n      }\n    }\n  }\n": types.GetRecommendedsDocument,
    "\n  query GetComingSoon {\n    comingSoon: Page (page: 1, perPage: 14) {\n      media (type:  ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    },\n  }\n": types.GetComingSoonDocument,
    "\n  query GetAnime($id: Int!) {\n    anime: Media (id: $id) {\n      genres\n      meanScore\n      description\n      startDate {\n        year \n      }\n      streamingEpisodes {\n        title\n        thumbnail\n      }\n    }\n  }\n": types.GetAnimeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHighlight($popularity: Int!) {\n    highlight: Media (type: ANIME, popularity_greater: $popularity) {\n      id\n      genres\n      title {\n        english\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n    },\n  }\n"): (typeof documents)["\n  query GetHighlight($popularity: Int!) {\n    highlight: Media (type: ANIME, popularity_greater: $popularity) {\n      id\n      genres\n      title {\n        english\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n    },\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTrends($day: Int!) {\n    trends: Page (page: $day, perPage: 10) {\n      media (type:  ANIME, sort: TRENDING_DESC) {\n        id\n        episodes\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTrends($day: Int!) {\n    trends: Page (page: $day, perPage: 10) {\n      media (type:  ANIME, sort: TRENDING_DESC) {\n        id\n        episodes\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTop {\n    mostPopular: Page (page: 1, perPage: 10) {\n      media (type: ANIME, sort: POPULARITY_DESC) {\n        id\n        episodes\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTop {\n    mostPopular: Page (page: 1, perPage: 10) {\n      media (type: ANIME, sort: POPULARITY_DESC) {\n        id\n        episodes\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetForYou($genre: String!) {\n    forYou: Page (page: 1, perPage: 5) {\n      media (type: ANIME, genre: $genre, sort: TRENDING_DESC) {\n        id\n        genres\n        description\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetForYou($genre: String!) {\n    forYou: Page (page: 1, perPage: 5) {\n      media (type: ANIME, genre: $genre, sort: TRENDING_DESC) {\n        id\n        genres\n        description\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRecommendeds {\n    recommendation: Page (page: 1, perPage: 12) {\n      recommendations (sort: RATING_DESC) {\n        media {\n          id\n          episodes\n          title {\n            english\n            romaji\n          }\n          coverImage {\n            extraLarge\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRecommendeds {\n    recommendation: Page (page: 1, perPage: 12) {\n      recommendations (sort: RATING_DESC) {\n        media {\n          id\n          episodes\n          title {\n            english\n            romaji\n          }\n          coverImage {\n            extraLarge\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetComingSoon {\n    comingSoon: Page (page: 1, perPage: 14) {\n      media (type:  ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    },\n  }\n"): (typeof documents)["\n  query GetComingSoon {\n    comingSoon: Page (page: 1, perPage: 14) {\n      media (type:  ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    },\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAnime($id: Int!) {\n    anime: Media (id: $id) {\n      genres\n      meanScore\n      description\n      startDate {\n        year \n      }\n      streamingEpisodes {\n        title\n        thumbnail\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAnime($id: Int!) {\n    anime: Media (id: $id) {\n      genres\n      meanScore\n      description\n      startDate {\n        year \n      }\n      streamingEpisodes {\n        title\n        thumbnail\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;