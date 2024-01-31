import { Heading, Icon, LinearGradient } from "@gluestack-ui/themed";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

import { CategoryCardProps } from "../types";

export function CategoryCard({ title, colors, IconCard }: CategoryCardProps) {

  return (
    <LinearGradient
      p={8}
      w="46%"
      rounded="$lg"
      alignItems="flex-end"
      as={ExpoLinearGradient}
      start={[0, 0]} end={[1, 1]}
      colors={colors ?? ["$backgroundDark500", "transparent"]}
    >
      <Icon as={IconCard} size={"50" as "lg"} />
      <Heading fontSize="$lg" w="$full">{title}</Heading>
    </LinearGradient>
  );
}