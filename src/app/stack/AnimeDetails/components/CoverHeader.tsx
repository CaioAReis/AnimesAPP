import { useWindowDimensions } from "react-native";
import { ArrowLeft, Play } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, ButtonIcon, ImageBackground } from "@gluestack-ui/themed";

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
      w={width} h={height / 1.4}
      source={{ uri: imageCover }}
    >
      <LinearGradient style={{ flex: 1 }} colors={["transparent", "transparent", "white"]}>

        <Button
          m={20}
          w={50} h={50}
          bgColor="white"
          rounded="$full"
          borderWidth={2}
          borderColor="$red500"
        >
          <ButtonIcon as={ArrowLeft} size="xl" color="$red500" />
        </Button>

        <Button
          right={40}
          bottom={-20}
          w={80} h={80}
          rounded="$full"
          onPress={onPlay}
          bgColor="$red500"
          position="absolute"
        >
          <ButtonIcon as={Play} size="xl" color="white" />
        </Button>

      </LinearGradient>
    </ImageBackground>
  );
}