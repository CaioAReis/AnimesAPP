import { MediaTrend } from "@/__generated__/graphql";
import { CardLargerProps } from "@/config/types";

interface HighlightsProps {
  image?: string | null,
  title?: string | null,
  height: number,
  isLoading?: boolean,
  description?: string,
}

interface MostInfoListProps {
  title: string,
  list: MostInfoCardProps[],
}

interface HorizontalListProps {
  title: string,
  isLoading?: boolean,
  showPosition?: boolean,
  list: MediaTrend[],
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
  onPress?: () => void,
}

export {
  HighlightsProps,
  MostInfoCardProps,
  MostInfoListProps,
  HorizontalListProps,
  HorizontalListLargerProps,
};