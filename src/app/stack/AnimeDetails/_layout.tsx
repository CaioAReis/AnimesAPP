import { Box, HStack, Heading, Icon, Text } from "@gluestack-ui/themed";
import { CoverHeader } from "./components";
import { Star } from "lucide-react-native";

export default function AnimeDetails() {

  return (
    <Box flex={1} borderWidth={1} borderColor="red">

      <CoverHeader
        onPlay={() => alert("Foi")}
        imageCover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.enjpg.com%2Fimg%2F2020%2Fdemon-slayer-desktop-8.jpg&f=1&nofb=1&ipt=4aca62af7b0a9a9be0549fb295ab0f8150c2a63652208498a3bfb572f97de0c4&ipo=images"
      />

      {/* ANIMES DETAILS */}
      <Box my={15} mx={20}>
        <Heading>ATTACK ON TITANS</Heading>
        <Text fontSize="$sm" lineHeight="$sm">2020 | action, adventure, Titans</Text>
        <HStack mt={8} space="md" alignItems="center">
          <Text>4.9</Text>
          <HStack space="xs">
            <Icon as={Star} />
            <Icon as={Star} />
            <Icon as={Star} />
            <Icon as={Star} />
            <Icon as={Star} />
          </HStack>
        </HStack>

      </Box>

      <Text>TELA DE DETALHES</Text>
    </Box>
  );
}