import { useMemo } from "react";
import { Svg, Text as TextSVG } from "react-native-svg";
import { Heading, Image, Pressable, Text, useToken } from "@gluestack-ui/themed";

import { AnimeCardProps } from "../config/types";

export function AnimeCard({ image, title, description, showPosition, height, width, onPress }: AnimeCardProps) {
  const primaryColor = useToken("colors", "primary500");

  const _render = useMemo(() => (
    <Pressable onPress={onPress} w={width as "$32" ?? "$32"} ml={showPosition && 20}>
      <Image
        w="$full"
        alt={title}
        rounded="$lg"
        bgColor="$blueGray200"
        source={{ uri: image }}
        h={height as "$48" ?? "$48"}
      />
      <Heading numberOfLines={1} fontSize="$sm" lineHeight="$sm">{title}</Heading>
      {description && (
        <Text fontSize="$xs" color="$text500" numberOfLines={1}>{description}</Text>
      )}

      {showPosition && (
        <Svg style={{ position: "absolute", left: -25 }}>
          <TextSVG
            fill={primaryColor + "50"}
            stroke={primaryColor}
            fontSize="120"
            strokeWidth={5}
            x={0} y="180"
            fontWeight="bold"
          >
            {showPosition}
          </TextSVG>
        </Svg>
      )}
    </Pressable>
  ), []);

  return _render;
}