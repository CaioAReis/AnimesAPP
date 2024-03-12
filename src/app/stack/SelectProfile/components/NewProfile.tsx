import { AvatarImage } from "@gluestack-ui/themed";
import { Avatar, AvatarFallbackText } from "@gluestack-ui/themed";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Heading } from "@gluestack-ui/themed";

interface NewProfileProps {
  isOpen: boolean,
  onClose: () => void,
}

export function NewProfile({ isOpen, onClose }: NewProfileProps) {

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent h="60%" zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <Box mt={10}>
          <Heading>Novo Perfil</Heading>

          <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
            <AvatarFallbackText>{"CAIO"}</AvatarFallbackText>
            <AvatarImage
              alt={`${"CAIO"}'s profile`}
              source={{ uri: "https://api.dicebear.com/7.x/bottts-neutral/png?seed=CA" }}
            />
          </Avatar>

        </Box>

        <ActionsheetItem onPress={onClose}>
          <ActionsheetItemText>Delete</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onClose}>
          <ActionsheetItemText>Share</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onClose}>
          <ActionsheetItemText>Play</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onClose}>
          <ActionsheetItemText>Favourite</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={onClose}>
          <ActionsheetItemText>Cancel</ActionsheetItemText>
        </ActionsheetItem>

      </ActionsheetContent>
    </Actionsheet>
  );
}