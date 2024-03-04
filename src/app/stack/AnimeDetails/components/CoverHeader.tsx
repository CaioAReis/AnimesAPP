import { router } from "expo-router";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Play, Share } from "lucide-react-native";
import { Button, ButtonIcon, HStack, Icon, ImageBackground } from "@gluestack-ui/themed";

interface CoverHeaderProps {
  imageCover: string,
  onPlay: () => void,
}

export function CoverHeader({ imageCover, onPlay }: CoverHeaderProps) {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      alt="Anime cover"
      bgColor="$blueGray300"
      w={width} h={height / 1.5}
      source={{ uri: imageCover }}
    >
      <LinearGradient style={{ flex: 1 }} colors={["transparent", "transparent", "white"]}>

        <Button
          m={20}
          w={50} h={50}
          bgColor="white"
          rounded="$full"
          borderWidth={2}
          borderColor="$textDark900"
          onPress={() => router.back()}
        >
          <ButtonIcon as={ArrowLeft} size="xl" color="$textDark900" />
        </Button>

        <HStack justifyContent="space-between" w="$full" px={20} position="absolute" bottom={-20}>
          <HStack space="md">
            <Button
              w={40} h={40}
              rounded="$full"
              onPress={onPlay}
              bgColor="$textDark900"
            >
              <ButtonIcon as={Share} size="md" color="white" />
            </Button>

            <Button
              w={40} h={40}
              rounded="$full"
              onPress={onPlay}
              bgColor="$textDark900"
            >
              <ButtonIcon as={Heart} size="xl" color="white" />
            </Button>
          </HStack>

          <Button
            w={80} h={80}
            rounded="$full"
            borderWidth={4}
            onPress={onPlay}
            bgColor="$red500"
            borderColor="white"
          >
            <Icon as={Play} size="xl" color="white" />
          </Button>
        </HStack>
      </LinearGradient>
    </ImageBackground>
  );
}