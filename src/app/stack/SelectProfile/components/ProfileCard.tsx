import { Link } from "expo-router";
import {
  Text,
  HStack,
  VStack,
  Avatar,
  Heading,
  AvatarImage,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

interface ProfileCardProps {
  name: string,
  picture?: string,
  accountType: 0 | 1;
}

export function ProfileCard({ name, picture, accountType }: ProfileCardProps) {
  const accountTypes = ["Adult", "Child"];

  return (
    <Link href="(tabs)/home" style={{ marginHorizontal: 20 }}>
      <HStack alignItems="center" space="xl" mx={20}>
        <Avatar bgColor="$primary400" size="lg" borderRadius="$full">
          <AvatarFallbackText>{name}</AvatarFallbackText>
          <AvatarImage
            alt={`${name}'s profile`}
            source={{ uri: picture ?? `https://api.dicebear.com/7.x/bottts-neutral/png?seed=${name}` }}
          />
        </Avatar>

        <VStack>
          <Heading>{name}</Heading>
          <Text fontSize="$sm" lineHeight="$sm" color="$text600">
            {accountTypes[accountType]}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
}