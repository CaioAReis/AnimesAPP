import { Bell } from "lucide-react-native";
import { ActionsheetItem } from "@gluestack-ui/themed";
import { Center, Icon, Text, VStack } from "@gluestack-ui/themed";

interface NotificationCardProps {
  body: string,
  title: string,
  onPress: () => void,
}

export function NotificationCard({ title, body, onPress }: NotificationCardProps) {

  return (
    <ActionsheetItem onPress={onPress} w="$full">
      <Center borderColor="$primary500" rounded="$full" p={8} bgColor="$primary100">
        <Icon as={Bell} size={"25" as "md"} color="$primary500" />
      </Center>

      <VStack flex={1} ml={14}>
        <Text size="sm">{title}</Text>
        <Text size="xs" color="$textDark500">{body}</Text>
      </VStack>
    </ActionsheetItem>
  );
}