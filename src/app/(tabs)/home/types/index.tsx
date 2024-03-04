import { AnimeCardProps, CardLargerProps } from "../../../../types";

interface HighlightsProps {
  image: string,
  title: string,
  height: number,
  description: string,
}

interface MostInfoListProps {
  title: string,
  list: MostInfoCardProps[],
}

interface HorizontalListProps {
  title: string,
  list: AnimeCardProps[],
}

interface HorizontalListLargerProps {
  title: string,
  list: CardLargerProps[],
}

interface MostInfoCardProps {
  title: string, 
  image: string, 
  categories: string, 
  description: string,
}

export {
  HighlightsProps, 
  MostInfoCardProps, 
  MostInfoListProps,
  HorizontalListProps, 
  HorizontalListLargerProps, 
};