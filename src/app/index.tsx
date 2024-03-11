import { useState } from "react";
import { Link } from "expo-router";
import { SvgUri } from "react-native-svg";
import { UserRoundCog } from "lucide-react-native";
import { Actionsheet, AvatarImage, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Button, Center, HStack, Heading, Text, VStack, Avatar, AvatarFallbackText, ButtonText, Icon } from "@gluestack-ui/themed";

interface ProfileCardProps {
  name: string,
  picture?: string,
  accountType: 0 | 1;
}

const ProfileCard = ({ name, picture, accountType }: ProfileCardProps) => {
  const accountTypes = ["Adult", "Child"];

  return (
    <Link href="(tabs)/home" style={{ marginHorizontal: 20 }}>
      <HStack alignItems="center" space="xl" mx={20}>
        <Avatar bgColor="$amber600" size="lg" borderRadius="$full">
          <AvatarFallbackText>{name}</AvatarFallbackText>
          <AvatarImage
            alt={`${name}'s profile`}
            source={{ uri: picture ?? `https://api.dicebear.com/7.x/bottts-neutral/png?seed=${name}` }}
          />
        </Avatar>

        <VStack>
          <Heading>{name}</Heading>
          <Text fontSize="$sm" lineHeight="$sm" color="$backgroundLight500">
            {accountTypes[accountType]}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
};

export default function Start() {
  const [showAction, setShowAction] = useState(false);
  const handleToggle = () => setShowAction(!showAction);

  // return <Redirect href="/stack/AnimeDetails" />;

  return (
    <Center flex={1}>
      <VStack space="lg" w="$full" flex={1}>
        <Center mt={40}>
          <SvgUri
            width={150}
            height={80}
            uri="https://img.logoipsum.com/289.svg"
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

      <Button my={20} w="80%" bgColor="$red500" borderRadius="$full" size="xl">
        <ButtonText mx={20}>New Profile</ButtonText>
        <Icon as={UserRoundCog} color="$white" />
      </Button>

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