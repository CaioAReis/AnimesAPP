import { useState } from "react";
import { Link, Redirect,  } from "expo-router";
import { SvgUri } from "react-native-svg";
import { useWindowDimensions } from "react-native";
import { UserRoundCog } from "lucide-react-native";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, Image, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, Center, HStack, Heading, Text, ButtonIcon, VStack } from "@gluestack-ui/themed";

export default function Start() {
  const { width } = useWindowDimensions();
  const [showAction, setShowAction] = useState(false);
  const handleToggle = () => setShowAction(!showAction);

  // return <Redirect href="/stack/AnimeDetails" />;

  return (
    <Center flex={1}>

      <Center mt={40}>
        <SvgUri
          width={200}
          height={80}
          uri="https://img.logoipsum.com/289.svg"
        />
      </Center>

      <Text textAlign="center" mt={10} mb={30}>The best MOVIES here!</Text>

      <Text textAlign="center">{"Who's Watching?"}</Text>
      <HStack my={20} flexWrap="wrap" space="xl" justifyContent="center">

        <Link href="(tabs)/home">
          <Box w={width / 2.5} overflow="hidden">
            <Image
              rounded="$xl"
              w={width / 2.5}
              h={width / 2}
              alt="Accounc 1"
              bgColor="$backgroundDark200"
              source={{ uri: "http://source.unsplash.com/random/200x200?man" }}
            />

            <Heading fontSize="$sm" lineHeight="$md" textAlign="center">Caio AReis</Heading>
          </Box>
        </Link>

        <Link href="(tabs)/home">
          <Box w={width / 2.5} overflow="hidden">
            <Image
              rounded="$xl"
              w={width / 2.5}
              h={width / 2}
              alt="Accounc 1"
              bgColor="$backgroundDark200"
              source={{ uri: "http://source.unsplash.com/random/200x200?woman" }}
            />

            <Heading fontSize="$sm" lineHeight="$md" textAlign="center">Caio AReis</Heading>
          </Box>
        </Link>

        <Link href="(tabs)/home">
          <Box w={width / 2.5} overflow="hidden">
            <Image
              rounded="$xl"
              w={width / 2.5}
              h={width / 2}
              alt="Accounc 1"
              bgColor="$backgroundDark200"
              source={{ uri: "http://source.unsplash.com/random/200x200?boy" }}
            />

            <Heading fontSize="$sm" lineHeight="$md" textAlign="center">Caio AReis</Heading>
          </Box>
        </Link>

        <Button onPress={handleToggle} w={width / 2.5} h={width / 2} bgColor="$backgroundDark200" rounded="$xl">
          <VStack alignItems="center">
            <ButtonIcon as={UserRoundCog} size={"40" as "xl"} color="$backgroundDark500" />
            <Heading fontSize="$md" mt={10} color="$backgroundDark500">Novo Perfil</Heading>
          </VStack>
        </Button>

      </HStack>

      <Actionsheet isOpen={showAction} onClose={handleToggle} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="60%" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <ActionsheetItem onPress={handleToggle}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleToggle}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleToggle}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleToggle}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleToggle}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>

        </ActionsheetContent>
      </Actionsheet>
    </Center>
  );
}