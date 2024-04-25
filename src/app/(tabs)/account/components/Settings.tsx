import { useCallback, useState } from "react";
import { Info, LogOut, Settings as SettingsIcon, User2, UserX2 } from "lucide-react-native";
import { Actionsheet, Button, ButtonIcon, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetScrollView, VStack, Modal, ModalBackdrop, ModalContent, ModalHeader, Heading, ModalCloseButton, Icon, CloseIcon, ModalBody, Text, ModalFooter } from "@gluestack-ui/themed";

import { MenuItem } from "./MenuItem";
import { Dialog } from "../../../../components";
import { ButtonText } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
import { router } from "expo-router";

export function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenDeleteProfile, setIsOpenDeleteProfile] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleLogOut = useCallback(() => {
    setIsOpenLogout(false);
    alert("Sair do app");
  }, []);

  const handleDeleteProfile = useCallback(() => {
    setIsOpenDeleteProfile(false);
    alert("Deletar Perfil do usuário");
  }, []);

  return (
    <>
      <Button onPress={handleOpen} w="$10" rounded="$full" bgColor="transparent">
        <ButtonIcon as={SettingsIcon} size="xl" color="$bg600" />
      </Button>

      <Actionsheet isOpen={isOpen} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop bgColor="$bg400" />
        <ActionsheetContent h="85%" zIndex={999} bgColor="$bg0">
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
                  router.push("stack/EditProfile");
                }}
              />

              <MenuItem
                Icon={Info}
                title="About the APP"
                onPress={() => {
                  handleClose();
                  setIsOpenAbout(true);
                }}
              />

              <MenuItem
                Icon={UserX2}
                title="Delete profile"
                description="Will delete this account's profile"
                onPress={() => {
                  handleClose();
                  setIsOpenDeleteProfile(true);
                }}
              />

              <MenuItem
                Icon={LogOut}
                title="Log out"
                color="$error500"
                onPress={() => {
                  handleClose();
                  setIsOpenLogout(true);
                }}
              />
            </VStack>
          </ActionsheetScrollView>
        </ActionsheetContent>
      </Actionsheet>

      <Dialog
        isOpen={isOpenLogout}
        onClose={() => setIsOpenLogout(false)}

        title="Are you leaving?"
        description="Are you sure want to log out?"

        Button={
          <Button
            size="sm"
            bg="$error400"
            rounded="$full"
            action="negative"
            onPress={handleLogOut}
          >
            <ButtonText>Yes</ButtonText>
          </Button>
        }
      />

      <Dialog
        isOpen={isOpenDeleteProfile}
        onClose={() => setIsOpenDeleteProfile(false)}

        title="Delete profile?"
        description="Are you sure you want to delete your profile?"

        Button={
          <Button
            size="sm"
            bg="$error400"
            rounded="$full"
            action="negative"
            onPress={handleDeleteProfile}
          >
            <ButtonText>Yes</ButtonText>
          </Button>
        }
      />

      <Modal
        isOpen={isOpenAbout}
        onClose={() => setIsOpenAbout(false)}
      // finalFocusRef={ref}
      >
        <ModalBackdrop bgColor="$bg500" />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">About</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Image
              alt="Logo app"
              w={200} h={100}
              alignSelf="center"
              resizeMode="contain"
              source={require("../../../../../assets/images/logo_dark.png")}
            />

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              mr="$3"
              size="sm"
              borderWidth={0}
              variant="outline"
              action="negative"
              onPress={() => setIsOpenAbout(false)}
            >
              <ButtonText>Close</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}