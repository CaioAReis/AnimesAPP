interface EpisodeCardProps {
  thumb: string,
  title: string,
  episode: number,
  watched: boolean,
  episodeMin: number,
  onPress: () => void,
}

export { EpisodeCardProps };