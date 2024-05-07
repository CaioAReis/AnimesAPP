import { useContext, useMemo } from "react";
import { Heart, Play } from "lucide-react-native";
import { useWindowDimensions } from "react-native";
import { Box, Button, Icon, HStack, Heading, Image, Text, useToken, Pressable } from "@gluestack-ui/themed";

import { MostInfoCardProps } from "../types";
import ThemeContext from "../../../../config/contexts/ThemeContext";

export function MostInfoCard({ title, image, categories, description, onPress }: MostInfoCardProps) {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);
  const bg = useToken("colors", "bg0" as "amber100");

  const _render = useMemo(() => (
    <Box w={width} px={20} mb={10}>
      <Pressable onPress={onPress} softShadow="1" shadowColor="$bg0" backgroundColor="$bg50" w="$full" rounded="$lg" overflow="hidden">
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
          <Button rounded="$full" w={50} h={50} bg="$primary400">
            <Icon as={Play} color={bg} fill={bg} size="xl" />
          </Button>

          <Button rounded="$full" w={50} h={50} bg="$primary400">
            <Icon as={Heart} color={bg} fill={bg} size="xl" />
          </Button>
        </HStack>
      </Pressable>
    </Box>
  ), [theme]);

  return _render;
}