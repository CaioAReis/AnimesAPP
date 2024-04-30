import { Heading, Icon, Pressable } from "@gluestack-ui/themed";

import { CategoryCardProps } from "../types";

export function CategoryCard({ title, color, width, height, IconCard, onPress }: CategoryCardProps) {

  return (
    <Pressable onPress={onPress} bgColor={`$${color || "primary"}500`} w={width} h={height} rounded="$md" p={12}>
      <Icon color={`$${color || "primary"}800`} fill={`$${color || "primary"}600`} as={IconCard} size={"40" as "lg"} />
      <Heading color="$bg0" size="sm" mt={20}>{title}</Heading>
    </Pressable>
  );
}