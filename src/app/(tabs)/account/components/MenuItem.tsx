import { ChevronRight, LucideIcon } from "lucide-react-native";
import { ActionsheetItem, ActionsheetIcon, ActionsheetItemText, VStack } from "@gluestack-ui/themed";

interface MenuItemProps {
  title: string,
  color?: string,
  Icon: LucideIcon,
  onPress: () => void,
  description?: string,
}

export function MenuItem({ title, description, color, Icon, onPress }: MenuItemProps) {

  return (
    <ActionsheetItem onPress={onPress} justifyContent="space-between">
      <ActionsheetIcon as={Icon} size={"25" as "lg"} color={color ?? "$textDark400"} />
      <VStack flex={1}>
        <ActionsheetItemText color={color ?? "$text100"}>{title}</ActionsheetItemText>
        {description && (
          <ActionsheetItemText color="$textDark500" fontSize="$xs" lineHeight="$xs">
            {description}
          </ActionsheetItemText>
        )}
      </VStack>
      <ActionsheetIcon as={ChevronRight} size={"25" as "lg"} color={color ?? "$textDark400"} />
    </ActionsheetItem>
  );
}