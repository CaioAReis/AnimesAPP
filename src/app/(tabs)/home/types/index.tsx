import { Media } from "@/__generated__/graphql";
import { CardLargerProps } from "@/config/types";

interface HighlightsProps {
  id?: number,
  image?: string | null,
  title?: string | null,
  height: number,
  isLoading?: boolean,
  description?: string,
}

interface MostInfoListProps {
  title: string,
  list: Media[],
}

interface HorizontalListProps {
  title: string,
  isLoading?: boolean,
  showPosition?: boolean,
  list: Media[],
}

interface HorizontalListLargerProps {
  title: string,
  list: CardLargerProps[],
}

interface MostInfoCardProps {
  id: number,
  title: string | null | undefined,
  image: string,
  categories: string,
  description: string,
  onPress?: () => void,
}

export {
  HighlightsProps,
  MostInfoCardProps,
  MostInfoListProps,
  HorizontalListProps,
  HorizontalListLargerProps,
};