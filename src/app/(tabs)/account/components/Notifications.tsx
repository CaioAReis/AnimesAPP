import { Bell } from "lucide-react-native";
import { useCallback, useState } from "react";
import {
  Button,
  VStack,
  ButtonIcon,
  Actionsheet,
  ActionsheetContent,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  useToken,
} from "@gluestack-ui/themed";

import { NotificationCard } from "./NotificationCard";

const notifications = [
  { title: "Notification 01", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", isRead: false },
  { title: "Notification 02", body: "Lorem Ipsum is simply.", isRead: false },
  { title: "Notification 03", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", isRead: false },
  { title: "Notification 04", body: "Lorem Ipsum is simply dummy text of the printing.", isRead: false },
];

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const iconColor = useToken("colors", "bg600" as "amber100");

  const handleOpenNotifications = useCallback(() => setIsOpen(true), []);
  const handleCloseNotifications = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button onPress={handleOpenNotifications} w="$10" rounded="$full" bgColor="transparent">
        <ButtonIcon as={Bell} size="xl" color={iconColor} />
      </Button>

      <Actionsheet isOpen={isOpen} onClose={handleCloseNotifications} zIndex={999}>
        <ActionsheetBackdrop bgColor="$bg400" />

        <ActionsheetContent zIndex={999} bgColor="$bg0">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <ActionsheetScrollView h="85%">
            <VStack space="md" pt={12}>
              {notifications?.map((notification, i) => (
                <NotificationCard
                  key={i}
                  body={notification?.body}
                  title={notification?.title}
                  onPress={handleCloseNotifications}
                />
              ))}
            </VStack>
          </ActionsheetScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}