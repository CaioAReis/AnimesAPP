interface AnimeCardProps {
  image: string,
  title: string,
  onPress?: () => void,
  description?: string,
  width?: string | number,
  height?: string | number,
  showPosition?: number | null,
}

interface CardLargerProps {
  image: string,
  title: string,
  duration: number,
  onPress: () => void,
  description?: string,
}

export {
  AnimeCardProps,
  CardLargerProps,
};