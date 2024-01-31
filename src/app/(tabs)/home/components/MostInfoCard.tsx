import { Heart, Play } from "lucide-react-native";
import { useWindowDimensions } from "react-native";
import { Box, Button, ButtonIcon, HStack, Heading, Image, Text } from "@gluestack-ui/themed";

import { MostInfoCardProps } from "../types";

export function MostInfoCard({ title, image, categories, description }: MostInfoCardProps) {
  const { width } = useWindowDimensions();

  return (
    <Box w={width} px={20} mb={10}>
      <Box softShadow="1" backgroundColor="$white" w="$full" rounded="$lg" overflow="hidden">
        <Image
          h="$40"
          w="$full"
          alt="teste"
          source={{ uri: image }}
        />

        <Heading fontSize="$md" mx={10} mt={10}>{title}</Heading>
        <Text mx={10} fontSize="$sm" lineHeight="$sm" color="$blueGray500">
          {categories}
        </Text>

        <Text m={10} fontSize="$sm" lineHeight="$sm" numberOfLines={4}>
          {description}
        </Text>

        <HStack space="sm" position="absolute" top="42%" right={20}>
          <Button rounded="$full" w={50} h={50} bg="$red500">
            <ButtonIcon as={Play} size="xl" />
          </Button>

          <Button rounded="$full" w={50} h={50} bg="$red500">
            <ButtonIcon as={Heart} size="xl" />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}