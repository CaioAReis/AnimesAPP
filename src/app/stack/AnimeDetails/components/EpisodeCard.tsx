import { Eye } from "lucide-react-native";
import { Heading, Icon, Text, Box, HStack, VStack, Image } from "@gluestack-ui/themed";

interface EpisodeCardProps {
  title: string,
  episode: number,
  watched: boolean,
  episodeMin: number,
}

export function EpisodeCard({ title, episode, episodeMin, watched }: EpisodeCardProps) {

  return (
    <HStack maxHeight={90} mx={20} space="md">
      <Box minHeight={90} w="40%" bgColor="$blueGray200" rounded="$md" overflow="hidden">
        <Image
          w="$full" h="$full"
          alt={`Thumb of episode ${episode}`}
          source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.38iq2AFFIP_d8Hylw5gCsQHaEK%26pid%3DApi&f=1&ipt=5e48657ff26505c0401e774ecb99d80143f1fee31c20ffd136cdb2152be6bcd3&ipo=images" }}
        />
      </Box>

      <Box flex={1} justifyContent="center">
        <VStack space="xs">
          <Heading fontSize="$sm" numberOfLines={2} lineHeight="$sm">
            THE OTHER SIDE OF THE SEA
          </Heading>

          <Text fontSize="$xs" lineHeight="$sm" color="$textDark500">
            Episode 1
          </Text>

          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize="$xs" lineHeight="$sm" color="$red500">24 min</Text>

            <Icon as={Eye} color="$red500" fill="$red100" size="lg" />
          </HStack>
        </VStack>
      </Box>
    </HStack>
  );
}