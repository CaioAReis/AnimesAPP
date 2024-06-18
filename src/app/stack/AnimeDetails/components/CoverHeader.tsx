import { router } from "expo-router";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Play, Share } from "lucide-react-native";
import { Button, ButtonIcon, HStack, Icon, ImageBackground, useToken } from "@gluestack-ui/themed";

interface CoverHeaderProps {
  imageCover: string,
  onPlay: () => void,
  favorited: boolean,
  hiddenPlay: boolean,
  onShare: () => void,
  onFavorite: () => void,
}

export function CoverHeader({ imageCover, onFavorite, favorited, onShare, hiddenPlay, onPlay }: CoverHeaderProps) {
  const { width, height } = useWindowDimensions();
  const bg = useToken("colors", "bg0" as "amber100");
  const invertedBG = useToken("colors", "bg950" as "amber100");
  const textColor = useToken("colors", "text100" as "amber100");

  return (
    <ImageBackground
      alt="Anime cover"
      bgColor="$blueGray300"
      w={width} h={height / 1.5}
      source={{ uri: imageCover }}
    >
      <LinearGradient style={{ flex: 1 }} colors={["transparent", "transparent", bg]}>

        <Button
          m={20}
          bgColor={bg}
          w={50} h={50}
          rounded="$full"
          borderWidth={2}
          borderColor="$bg400"
          onPress={() => router.back()}
        >
          <ButtonIcon as={ArrowLeft} size="xl" color={textColor} />
        </Button>

        <HStack justifyContent="space-between" w="$full" px={20} position="absolute" bottom={-20}>
          <HStack space="md" py={hiddenPlay ? 0 : 20}>
            <Button
              w={40} h={40}
              rounded="$full"
              onPress={onShare}
              bgColor={invertedBG}
            >
              <ButtonIcon as={Share} size="md" color={bg} />
            </Button>

            <Button
              w={40} h={40}
              rounded="$full"
              onPress={onFavorite}
              bgColor={invertedBG}
            >
              <Icon as={Heart} size="md" color={bg} fill={favorited ? bg : "transparent"} />
            </Button>
          </HStack>

          {hiddenPlay && (
            <Button
              w={80} h={80}
              rounded="$full"
              borderWidth={4}
              onPress={onPlay}
              borderColor={bg}
              bgColor="$primary400"
            >
              <Icon as={Play} size="xl" fill={bg} color={bg} />
            </Button>
          )}
        </HStack>
      </LinearGradient>
    </ImageBackground>
  );
}