import { useContext } from "react";
import { Heading, Icon, Pressable, useToken } from "@gluestack-ui/themed";

import { CategoryCardProps } from "../types";
import ThemeContext from "@/config/contexts/ThemeContext";

export function CategoryCard({ title, color, width, height, IconCard, onPress }: CategoryCardProps) {
  const { theme } = useContext(ThemeContext);

  const bg = useToken("colors", `${color || "primary"}${theme === "light" ? "100" : "900"}` as "rose100");
  const text = useToken("colors", `${color || "primary"}${theme === "light" ? "600" : "400"}` as "rose100");
  const fill = useToken("colors", `${color || "primary"}${theme === "light" ? "400" : "700"}` as "rose100");

  return (
    <Pressable onPress={onPress} bgColor={bg} w={width} h={height} rounded="$md" p={12}>
      <Icon color={text} fill={fill} as={IconCard} size={"40" as "lg"} />
      <Heading color={text} size="sm" mt={20}>{title}</Heading>
    </Pressable>
  );
}