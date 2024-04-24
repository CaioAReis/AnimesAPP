import { router } from "expo-router";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Play, Share } from "lucide-react-native";
import { Button, ButtonIcon, HStack, Icon, ImageBackground, useToken } from "@gluestack-ui/themed";
import { useCallback } from "react";

interface CoverHeaderProps {
  imageCover: string,
  onPlay: () => void,
}

export function CoverHeader({ imageCover, onPlay }: CoverHeaderProps) {
  const { width, height } = useWindowDimensions();
  const bg = useToken("colors", "bg0" as "amber100");

  const onShare = useCallback(() => {
    alert("Compartilhar");
  }, []);

  const onFavorite = useCallback(() => {
    alert("Favoritar");
  }, []);

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
          w={50} h={50}
          bgColor="$bg0"
          rounded="$full"
          borderWidth={2}
          borderColor="$text100"
          onPress={() => router.back()}
        >
          <ButtonIcon as={ArrowLeft} size="xl" color="$text100" />
        </Button>

        <HStack justifyContent="space-between" w="$full" px={20} position="absolute" bottom={-20}>
          <HStack space="md">
            <Button
              w={40} h={40}
              rounded="$full"
              onPress={onShare}
              bgColor="$text100"
            >
              <ButtonIcon as={Share} size="md" color="$bg0" />
            </Button>

            <Button
              w={40} h={40}
              rounded="$full"
              onPress={onFavorite}
              bgColor="$text100"
            >
              <ButtonIcon as={Heart} size="xl" color="$bg0" />
            </Button>
          </HStack>

          <Button
            w={80} h={80}
            rounded="$full"
            borderWidth={4}
            onPress={onPlay}
            bgColor="$primary400"
            borderColor="$bg0"
          >
            <Icon as={Play} size="xl" color="$bg0" />
          </Button>
        </HStack>
      </LinearGradient>
    </ImageBackground>
  );
}