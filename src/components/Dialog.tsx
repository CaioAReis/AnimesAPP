import { useMemo } from "react";
import { AlertDialogFooter, Button, ButtonGroup, ButtonText, Text, AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogBody, AlertDialogCloseButton, AlertDialogHeader, CloseIcon, Heading, Icon } from "@gluestack-ui/themed";

interface DialogProps {
  title: string,
  isOpen: boolean,
  onClose: () => void,
  description?: string,
  Button: JSX.Element,
}

export function Dialog({ isOpen, onClose, title, description, Button: ButtonAction }: DialogProps) {

  const _render = useMemo(() => (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogBackdrop bgColor="$bg500" />

      <AlertDialogContent bgColor="$bg0">
        <AlertDialogHeader>
          <Heading size="lg">{title}</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>

        <AlertDialogBody>
          {description && <Text size="sm">{description}</Text>}
        </AlertDialogBody>

        <AlertDialogFooter>
          <ButtonGroup space="lg">

            <Button
              size="sm"
              borderWidth={0}
              onPress={onClose}
              variant="outline"
              action="secondary"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>

            {ButtonAction ?? null}

          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ), []);

  return _render;
}