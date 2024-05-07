import { useCallback } from "react";
import { router } from "expo-router";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Play, Share } from "lucide-react-native";
import { Button, ButtonIcon, HStack, Icon, ImageBackground, useToken } from "@gluestack-ui/themed";

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
          bgColor={bg}
          w={50} h={50}
          rounded="$full"
          borderWidth={2}
          borderColor="$bg400"
          onPress={() => router.back()}
        >
          <ButtonIcon as={ArrowLeft} size="xl" color="$text100" />
        </Button>

        <HStack justifyContent="space-between" w="$full" px={20} position="absolute" bottom={-20}>
          <HStack space="md">
            <Button
              w={40} h={40}
              rounded="$full"
              bgColor="$bg950"
              onPress={onShare}
            >
              <ButtonIcon as={Share} size="md" color={bg} />
            </Button>

            <Button
              w={40} h={40}
              rounded="$full"
              bgColor="$bg950"
              onPress={onFavorite}
            >
              <Icon as={Heart} size="md" color={bg} fill={bg} />
            </Button>
          </HStack>

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
        </HStack>
      </LinearGradient>
    </ImageBackground>
  );
}