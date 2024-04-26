import { useWindowDimensions } from "react-native";
import { Heading, Box, Icon, Pressable } from "@gluestack-ui/themed";

import { CategoryCardProps } from "../types";

export function CategoryCard({ title, IconCard, onPress }: CategoryCardProps) {
  const { width } = useWindowDimensions();

  return (
    <Box alignItems="center" justifyContent="center">
      <Pressable
        w={width / 4.5}
        h={width / 4.5}
        rounded="$full"
        borderWidth={4}
        onPress={onPress}
        overflow="hidden"
        alignItems="center"
        bgColor="$primary50"
        justifyContent="center"
        borderColor="$primary100"
      >
        <Icon color="$primary400" as={IconCard} size={"40" as "lg"} />
      </Pressable>

      <Heading color="$primary400" size="sm" mt={2}>{title}</Heading>
    </Box>
  );
}