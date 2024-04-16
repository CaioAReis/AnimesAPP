import { useCallback, useState } from "react";
import { Info, LogOut, Settings as SettingsIcon, User2, UserX2 } from "lucide-react-native";
import { Actionsheet, Button, ButtonIcon, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetScrollView, VStack } from "@gluestack-ui/themed";

import { MenuItem } from "./MenuItem";

export function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button onPress={handleOpen} w="$10" rounded="$full" bgColor="transparent">
        <ButtonIcon as={SettingsIcon} size="xl" color="$backgroundDark800" />
      </Button>

      <Actionsheet isOpen={isOpen} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="85%" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <ActionsheetScrollView>
            <VStack space="md" pt={12}>

              <MenuItem
                Icon={User2}
                title="Edit profile"
                description="Customize your account"
                onPress={() => {
                  handleClose();
                }}
              />

              <MenuItem
                Icon={Info}
                title="About the APP"
                onPress={() => {
                  handleClose();
                }}
              />

              <MenuItem
                Icon={UserX2}
                title="Delete profile"
                description="Will delete this account's profile"
                onPress={() => {
                  handleClose();
                }}
              />

              <MenuItem
                Icon={LogOut}
                title="Log out"
                color="$red400"
                onPress={() => {
                  handleClose();
                }}
              />

            </VStack>
          </ActionsheetScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}