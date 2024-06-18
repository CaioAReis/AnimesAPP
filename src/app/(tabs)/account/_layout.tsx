import { Divider, HStack, Heading, Image, ScrollView } from "@gluestack-ui/themed";
import { Avatar, AvatarFallbackText, AvatarImage, Box, Text, VStack } from "@gluestack-ui/themed";

import { HorizontalList } from "@/components";
import { MostInfoList } from "../home/components";
import { Notifications, Settings, ThemeButton } from "./components";
import { getForYou, getRecommendeds, getTrends } from "@/service/animesServices";

export default function Account() {
  const { trends } = getTrends(4);
  const { forYou } = getForYou("Action");
  const { recommendeds } = getRecommendeds();

  return (
    <Box flex={1}>
      <ScrollView>
        <VStack px={20} py={10}>
          <HStack my={20} alignItems="center" justifyContent="space-between">
            <Image
              alt="Logo app"
              w="40%" h="$10"
              resizeMode="contain"
              source={require("@/../assets/images/logo_dark.png")}
            />

            <HStack alignSelf="flex-end" space="md">
              <ThemeButton />

              <Notifications />

              <Settings />
            </HStack>
          </HStack>

          <HStack alignItems="center">
            <Avatar bgColor="transparent" size="xl" borderRadius="$full">
              <AvatarFallbackText>Caio AReis</AvatarFallbackText>
              <AvatarImage alt="User" source={{ uri: "https://api.dicebear.com/8.x/bottts/png?seed=C" }} />
            </Avatar>

            <VStack ml={10} flex={1}>
              <Heading>Caio AReis</Heading>
              <Text color="$text500" mb={4} fontSize="$sm">Caio@mail.com</Text>
              <Text fontSize="$sm" lineHeight="$sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider my={10} />

        {/* <HorizontalList title="Last watched" list={fakeList} /> */}

        <HorizontalList title="Recommended" list={recommendeds} />

        <MostInfoList title="For you" list={forYou} />

        <HorizontalList title="Trends" list={trends} />

        <Box h={60} />
      </ScrollView>
    </Box>
  );
}