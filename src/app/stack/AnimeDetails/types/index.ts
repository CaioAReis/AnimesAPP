interface EpisodeCardProps {
  thumb: string,
  title: string,
  episode: string,
  watched: boolean,
  onPress: () => void,
  episodeMin?: number | null | undefined,
}

export { EpisodeCardProps };