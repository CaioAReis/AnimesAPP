interface AnimeCardProps {
  image: string,
  title: string,
  description?: string,
  width?: string | number,
  height?: string | number,
}

interface CardLargerProps {
  image: string,
  title: string,
  duration: number,
  description?: string,
}

export {
  AnimeCardProps, 
  CardLargerProps,
};