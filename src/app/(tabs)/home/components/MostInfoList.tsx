import { useRef } from "react";
import { Box, HStack, Heading, useToken } from "@gluestack-ui/themed";
import { Animated, FlatList, useWindowDimensions } from "react-native";

import { MostInfoListProps } from "../types";
import { MostInfoCard } from "./MostInfoCard";
import { router } from "expo-router";

export function MostInfoList({ title, list }: MostInfoListProps) {
  const { width } = useWindowDimensions();
  const translate = useRef(new Animated.Value(0)).current;

  const y = useToken("colors", "primary400");
  const x = useToken("colors", "bg400" as "amber100");

  if (!list?.length) return null;

  return (
    <Box>
      <Heading ml={20} my={15}>
        {title}
      </Heading>

      <Box>
        <FlatList
          horizontal
          data={list}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: translate } } }], { useNativeDriver: false })}
          renderItem={({ item }) => (
            <MostInfoCard
              image={item?.bannerImage || ""}
              description={item?.description || ""}
              categories={[...item?.genres || ""]?.join(", ")}
              title={item?.title?.english || item?.title?.romaji || ""}
              onPress={() => router.push({
                pathname: "/stack/AnimeDetails",
                params: {
                  id: item?.id,
                  image: item?.coverImage?.extraLarge,
                  name: item?.title?.english || item?.title?.romaji,
                },
              })}
            />
          )}
        />

        <HStack mt={8} alignItems="center" justifyContent="center" space="sm">
          {list?.map((item, i) => {

            const widthSeg = translate.interpolate({
              inputRange: [width * (i - 1), width * i, width * (i + 1)],
              outputRange: [6, 20, 6],
              extrapolate: "clamp",
            });

            const colorSeg = translate.interpolate({
              inputRange: [width * (i - 1), width * i, width * (i + 1)],
              outputRange: [x, y, x],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={i}
                style={{
                  height: 6,
                  width: widthSeg,
                  borderRadius: 3,
                  backgroundColor: colorSeg,
                }}
              />
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
}