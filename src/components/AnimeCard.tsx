import { Box, Heading, Image, Text, useToken } from "@gluestack-ui/themed";
import { Text as TextSVG } from "react-native-svg";

import { AnimeCardProps } from "../types";
import { Svg } from "react-native-svg";

export function AnimeCard({ image, title, description, showPosition, height, width }: AnimeCardProps) {
  const primaryColor = useToken("colors", "red600");

  return (
    <Box w={width as "$32" ?? "$32"} ml={showPosition && 20}>
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
        <Text fontSize="$xs" numberOfLines={1}>{description}</Text>
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
    </Box>
  );
}

{/* <Heading
  // bgColor="blue"
  bottom={35}
  left={-30}
  color="red"
  fontSize={120}
  lineHeight={120}
  position="absolute"
>
  {showPosition}
</Heading> */}