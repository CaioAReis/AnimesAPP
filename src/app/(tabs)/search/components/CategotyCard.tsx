import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { Heading, Icon, LinearGradient, Pressable } from "@gluestack-ui/themed";

import { CategoryCardProps } from "../types";

export function CategoryCard({ title, colors, IconCard, onPress }: CategoryCardProps) {

  return (
    <Pressable onPress={onPress} w="46%" rounded="$lg" overflow="hidden">
      <LinearGradient
        p={8}
        alignItems="flex-end"
        as={ExpoLinearGradient}
        start={[0, 0]} end={[1, 1]}
        colors={colors ?? ["$backgroundDark500", "transparent"]}
      >
        <Icon as={IconCard} size={"50" as "lg"} />
        <Heading fontSize="$lg" w="$full">{title}</Heading>
      </LinearGradient>
    </Pressable>
  );
}