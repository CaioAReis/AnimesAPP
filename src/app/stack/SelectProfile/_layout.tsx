import { useState } from "react";
import { UserRoundCog } from "lucide-react-native";
import { Button, ButtonText, Center, Heading, Icon, Image, Text, VStack } from "@gluestack-ui/themed";

import { NewProfile, ProfileCard } from "./components";

export default function SelectProfile() {
  const onToggle = () => setShowAction(!showAction);
  const [showAction, setShowAction] = useState(false);

  return (
    <Center flex={1}>
      <VStack space="lg" w="$full" flex={1}>
        <Center mt={40}>
          <Image
            width={200}
            height={80}
            alt="Logo app"
            resizeMode="contain"
            source={require("../../../../assets/images/logo_dark.png")}
          />
        </Center>

        <Center>
          <Heading fontSize="$xl" lineHeight="$xl">Welcome Back!</Heading>
          <Text fontSize="$sm" color="$backgroundLight500" lineHeight="$sm" textAlign="center" mb={30}>
            Chose a profile to begin
          </Text>
        </Center>

        <VStack space="4xl">
          <ProfileCard name="Caio AReis" accountType={0} />
          <ProfileCard name="Silvio Santos" accountType={0} />
          <ProfileCard name="Edson Gomes" accountType={1} />
        </VStack>
      </VStack>

      <Button onPress={onToggle} my={20} w="80%" bgColor="$primary400" borderRadius="$full">
        <ButtonText color="white" mx={20}>New Profile</ButtonText>
        <Icon as={UserRoundCog} color="$white" />
      </Button>

      <NewProfile isOpen={showAction} onClose={onToggle} />
    </Center>
  );
}