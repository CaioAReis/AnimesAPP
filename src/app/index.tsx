import { useState } from "react";
import { Link } from "expo-router";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Button, ButtonText, Center, Text } from "@gluestack-ui/themed";

export default function Start() {

  const [showAction, setShowAction] = useState(false);
  const handleToggle = () => setShowAction(!showAction);

  return (
    <Center flex={1}>
      <Text>Start Page</Text>

      <Link href="(tabs)/home" asChild>
        <Button mt={20}>
          <ButtonText>Go to Tabs</ButtonText>
        </Button>
      </Link>

      <Button mt={30} onPress={handleToggle}>
        <ButtonText>BottomSheet Teste</ButtonText>
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