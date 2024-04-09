import { Moon, Settings } from "lucide-react-native";
import { Divider, HStack, Heading, Image, ScrollView } from "@gluestack-ui/themed";
import { Avatar, AvatarFallbackText, AvatarImage, Box, Button, ButtonIcon, Text, VStack } from "@gluestack-ui/themed";

import { Notifications } from "./components";
import { MostInfoList } from "../home/components";
import { HorizontalList } from "../../../components";

const fakeList = [
  { title: "Death note", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XjEUzJ0cwCQ13-EXXWzl2QHaLq%26pid%3DApi&f=1&ipt=af20627d310825304abccf32ff73ff52b22f382e99cffc39fda1631a4a3ea430&ipo=images" },
  { title: "Pokemon", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BFjVbmISl5oYX3iupstWKAHaKi%26pid%3DApi&f=1&ipt=6adc91cf4e62a28733b4b40e07c160a71b057090128960dd9215fd97d64c4ba9&ipo=images" },
  { title: "HunterXHunter", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dZaTeIuJOYikKQrkW3VnJQHaHa%26pid%3DApi&f=1&ipt=310e428bef247a7457571100782209e34e8824e66c4a209c0f9e4aaa8f130d26&ipo=images" },
  { title: "VinlandSaga", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d0tBl3zAXXjETcu_r1jzDAHaLG%26pid%3DApi&f=1&ipt=0164df36fe0e0ab1e951c06fe7ef7d574443984b0416d48d50edb3ff74b44d93&ipo=images" },
  { title: "Dr. Stone", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QA_qEV3aAs9jjbK8u-Y4TAHaKe%26pid%3DApi&f=1&ipt=f96876aa55875851abcd4040e0849258e961dffb5b6e1bb2fef1ab5fdf7a3c97&ipo=images" },
  { title: "Noragami", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kRrOhHrpjc_aGf1GfF9_4wHaHa%26pid%3DApi&f=1&ipt=b7a8fccef17696a2aabe3ee660a06256b288eed0eace8396256acb57088a2528&ipo=images" },
  { title: "Berseker", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1Qt1-0GAGeW9gSKIpShmFgHaKZ%26pid%3DApi&f=1&ipt=50cd6dab733cc1499e5c65a470b3a6966e28d9a36af71188f385dc1f73d01ba9&ipo=images" },
  { title: "Haikyuu", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GIx1LzQB_jZJ6MYtVX9I-QHaK5%26pid%3DApi&f=1&ipt=7388122191596c1f023d704af4fdc232a9dad60094c10e7bb0425aa17e0e0a47&ipo=images" },
];

const forYou = [
  {
    ...fakeList[0],
    categories: "Action, Demons, Historical, Shounen, Supernatural",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    ...fakeList[2],
    categories: "Action, Demons, Historical, Shounen, Supernatural",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    ...fakeList[7],
    categories: "Action, Demons, Historical, Shounen, Supernatural",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    ...fakeList[4],
    categories: "Action, Demons, Historical, Shounen, Supernatural",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function Account() {

  return (
    <Box flex={1}>
      <ScrollView>
        <VStack px={20} py={10}>
          <HStack my={20} alignItems="center" justifyContent="space-between">
            <Image
              alt="Logo app"
              w="40%" h="$10"
              resizeMode="contain"
              source={require("../../../../assets/images/logo_dark.png")}
            />

            <HStack alignSelf="flex-end" space="md">
              <Button w="$10" rounded="$full" bgColor="transparent">
                <ButtonIcon as={Moon} size="xl" color="$backgroundDark800" />
              </Button>

              <Notifications />

              <Button w="$10" rounded="$full" bgColor="transparent">
                <ButtonIcon as={Settings} size="xl" color="$backgroundDark800" />
              </Button>
            </HStack>
          </HStack>

          <HStack alignItems="center">
            <Avatar bgColor="$orange400" size="xl" borderRadius="$full">
              <AvatarFallbackText>Caio AReis</AvatarFallbackText>
              <AvatarImage alt="User" source={{ uri: "http://source.unsplash.com/random/200x200?man" }} />
            </Avatar>

            <VStack ml={10} flex={1}>
              <Heading>Caio AReis</Heading>
              <Text fontSize="$sm" lineHeight="$sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider my={10} />

        <HorizontalList title="Last watched" list={fakeList} />

        <MostInfoList title="For you" list={forYou} />

        <HorizontalList title="Recommended" list={fakeList} />

        <Box h={60} />
      </ScrollView>
    </Box>
  );
}