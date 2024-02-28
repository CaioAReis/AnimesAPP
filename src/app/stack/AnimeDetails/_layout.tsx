import { Box, Text } from "@gluestack-ui/themed";
import { CoverHeader } from "./components";

export default function AnimeDetails() {

  return (
    <Box flex={1} borderWidth={1} borderColor="red">

      <CoverHeader
        onPlay={() => alert("Foi")}
        imageCover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.enjpg.com%2Fimg%2F2020%2Fdemon-slayer-desktop-8.jpg&f=1&nofb=1&ipt=4aca62af7b0a9a9be0549fb295ab0f8150c2a63652208498a3bfb572f97de0c4&ipo=images"
      />

      <Text>TELA DE DETALHES</Text>
    </Box>
  );
}