import { useState } from "react";
import { FlatList } from "react-native";
import { Box, HStack, Heading, Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed";
import { BookHeart, Castle, Flower, Ghost, Laugh, Milestone, Palmtree, School2, Search as SearchICON, Speech, Swords } from "lucide-react-native";

import { CategoryCard } from "./components";
import { AnimeCardProps } from "../../../types";
import { AnimeCard } from "../../../components";

const categories = [
  { title: "Aventura", icon: Palmtree, colors: ["$red500", "$red200", "$red400"] },
  { title: "Ação", icon: Swords, colors: ["$purple500", "$purple200", "$purple400"] },
  { title: "Comédia", icon: Laugh, colors: ["$blue500", "$blue200", "$blue400"] },
  { title: "Dublado", icon: Speech, colors: ["$yellow500", "$yellow200", "$yellow400"] },
  { title: "Drama", icon: Flower, colors: ["$pink500", "$pink200", "$pink400"] },
  { title: "Escolar", icon: School2, colors: ["$green500", "$green200", "$green400"] },
  { title: "Fantasia", icon: Castle, colors: ["$cyan500", "$cyan200", "$cyan400"] },
  { title: "Romance", icon: BookHeart, colors: ["$amber500", "$amber200", "$amber400"] },
  { title: "Sobrenatural", icon: Ghost, colors: ["$fuchsia500", "$fuchsia200", "$fuchsia400"] },
  { title: "Shounen", icon: Milestone, colors: ["$indigo500", "$indigo200", "$indigo400"] },
];

const fakeList = [
  { title: "Death note", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XjEUzJ0cwCQ13-EXXWzl2QHaLq%26pid%3DApi&f=1&ipt=af20627d310825304abccf32ff73ff52b22f382e99cffc39fda1631a4a3ea430&ipo=images" },
  { title: "Pokemon", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BFjVbmISl5oYX3iupstWKAHaKi%26pid%3DApi&f=1&ipt=6adc91cf4e62a28733b4b40e07c160a71b057090128960dd9215fd97d64c4ba9&ipo=images" },
  { title: "HunterXHunter", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dZaTeIuJOYikKQrkW3VnJQHaHa%26pid%3DApi&f=1&ipt=310e428bef247a7457571100782209e34e8824e66c4a209c0f9e4aaa8f130d26&ipo=images" },
  { title: "VinlandSaga", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d0tBl3zAXXjETcu_r1jzDAHaLG%26pid%3DApi&f=1&ipt=0164df36fe0e0ab1e951c06fe7ef7d574443984b0416d48d50edb3ff74b44d93&ipo=images" },
  { title: "Dr. Stone", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QA_qEV3aAs9jjbK8u-Y4TAHaKe%26pid%3DApi&f=1&ipt=f96876aa55875851abcd4040e0849258e961dffb5b6e1bb2fef1ab5fdf7a3c97&ipo=images" },
  { title: "Noragami", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kRrOhHrpjc_aGf1GfF9_4wHaHa%26pid%3DApi&f=1&ipt=b7a8fccef17696a2aabe3ee660a06256b288eed0eace8396256acb57088a2528&ipo=images" },
  { title: "Berseker", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1Qt1-0GAGeW9gSKIpShmFgHaKZ%26pid%3DApi&f=1&ipt=50cd6dab733cc1499e5c65a470b3a6966e28d9a36af71188f385dc1f73d01ba9&ipo=images" },
  { title: "Haikyuu", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GIx1LzQB_jZJ6MYtVX9I-QHaK5%26pid%3DApi&f=1&ipt=7388122191596c1f023d704af4fdc232a9dad60094c10e7bb0425aa17e0e0a47&ipo=images" },

  { title: "Death note", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XjEUzJ0cwCQ13-EXXWzl2QHaLq%26pid%3DApi&f=1&ipt=af20627d310825304abccf32ff73ff52b22f382e99cffc39fda1631a4a3ea430&ipo=images" },
  { title: "Pokemon", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BFjVbmISl5oYX3iupstWKAHaKi%26pid%3DApi&f=1&ipt=6adc91cf4e62a28733b4b40e07c160a71b057090128960dd9215fd97d64c4ba9&ipo=images" },
  { title: "HunterXHunter", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dZaTeIuJOYikKQrkW3VnJQHaHa%26pid%3DApi&f=1&ipt=310e428bef247a7457571100782209e34e8824e66c4a209c0f9e4aaa8f130d26&ipo=images" },
  { title: "VinlandSaga", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d0tBl3zAXXjETcu_r1jzDAHaLG%26pid%3DApi&f=1&ipt=0164df36fe0e0ab1e951c06fe7ef7d574443984b0416d48d50edb3ff74b44d93&ipo=images" },
  { title: "Dr. Stone", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QA_qEV3aAs9jjbK8u-Y4TAHaKe%26pid%3DApi&f=1&ipt=f96876aa55875851abcd4040e0849258e961dffb5b6e1bb2fef1ab5fdf7a3c97&ipo=images" },
  { title: "Noragami", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kRrOhHrpjc_aGf1GfF9_4wHaHa%26pid%3DApi&f=1&ipt=b7a8fccef17696a2aabe3ee660a06256b288eed0eace8396256acb57088a2528&ipo=images" },
  { title: "Berseker", description: "S04 E12 - Today", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1Qt1-0GAGeW9gSKIpShmFgHaKZ%26pid%3DApi&f=1&ipt=50cd6dab733cc1499e5c65a470b3a6966e28d9a36af71188f385dc1f73d01ba9&ipo=images" },
];

export default function Search() {
  const [list] = useState<AnimeCardProps[]>(fakeList);

  return (
    <Box flex={1}>
      <Input size="lg" m={20} rounded="$lg" bgColor="$backgroundDark100">
        <InputSlot>
          <InputIcon as={SearchICON} ml={8} />
        </InputSlot>
        <InputField placeholder="Pesquisar" />
      </Input>

      {list?.length ? (
        <FlatList
          data={list}
          numColumns={3}
          ListFooterComponent={<Box h={60} />}
          columnWrapperStyle={{ marginBottom: 15, marginHorizontal: 20, justifyContent: "space-evenly" }}
          renderItem={({ item }) => (
            <AnimeCard
              width="30%"
              image={item?.image}
              title={item?.title}
            />
          )}
        />
      ) : (
        <Box>
          <Heading mx={20} fontSize="$2xl">Categorias</Heading>
          <HStack mt={20} px={20} space="lg" justifyContent="center" flexWrap="wrap">
            {categories?.map((item, i) => (
              <CategoryCard
                key={i}
                title={item?.title}
                colors={item?.colors}
                IconCard={item?.icon}
              />
            ))}
          </HStack>
        </Box>
      )}

    </Box>
  );
}