import { ChevronDownIcon } from "lucide-react-native";
import {
  Box,
  Icon,
  Select,
  HStack,
  ScrollView,
  SelectItem,
  SelectInput,
  SelectPortal,
  SelectContent,
  SelectTrigger,
  SelectBackdrop,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  FlatList,
} from "@gluestack-ui/themed";

import { AnimeInfo, CoverHeader, EpisodeCard } from "./components";

const list = ["", "", "", "", ""];

export default function AnimeDetails() {

  return (
    <FlatList
      data={list}
      
      renderItem={() => <EpisodeCard />}

      ItemSeparatorComponent={() => <Box h={15} />}

      ListHeaderComponent={
        <>
          <CoverHeader
            onPlay={() => alert("Foi")}
            imageCover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.enjpg.com%2Fimg%2F2020%2Fdemon-slayer-desktop-8.jpg&f=1&nofb=1&ipt=4aca62af7b0a9a9be0549fb295ab0f8150c2a63652208498a3bfb572f97de0c4&ipo=images"
          />

          <AnimeInfo
            year={2022}
            rating={4.5}
            title="Attack on titan"
            categories={["Action", "Deamons", "Adventure"]}
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />

          <HStack m={20} justifyContent="space-between">
            <Select w="$full" defaultValue="Season 01">
              <SelectTrigger variant="outline" size="lg" >
                <SelectInput placeholder="Select option" />
                <Icon as={ChevronDownIcon} mr={8} />
              </SelectTrigger>

              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>

                  <SelectItem label="Season 01" value="1" />
                  <SelectItem label="Season 02" value="2" />
                  <SelectItem label="Season 03" value="3" />
                  <SelectItem label="Season 04" value="4" />
                  <SelectItem label="Season 05" value="5" />

                  <Box h={40} />
                </SelectContent>
              </SelectPortal>
            </Select>
          </HStack>
        </>
      }

      ListFooterComponent={<Box h={70} />}
    />
  );
}