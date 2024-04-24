import { AlertCircleIcon, SmilePlus } from "lucide-react-native";
import {
  Box,
  Icon,
  Text,
  Input,
  Button,
  Switch,
  HStack,
  Avatar,
  Heading,
  ButtonText,
  InputField,
  AvatarImage,
  FormControl,
  Actionsheet,
  FormControlError,
  FormControlLabel,
  AvatarFallbackText,
  ActionsheetContent,
  ActionsheetBackdrop,
  FormControlErrorText,
  FormControlLabelText,
  KeyboardAvoidingView,
  FormControlErrorIcon,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from "@gluestack-ui/themed";

interface NewProfileProps {
  isOpen: boolean,
  onClose: () => void,
}

export function NewProfile({ isOpen, onClose }: NewProfileProps) {

  const onSubmit = () => {

    alert("CREATE A NEW PROFILE");
    onClose();

  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent h="60%" zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <KeyboardAvoidingView w="$full" behavior="height">
          <Box px={20} mt={10} w="$full">
            <Heading>New Profile</Heading>

            <Avatar my={20} alignSelf="center" bgColor="$primary400" size="xl" borderRadius="$full">
              <AvatarFallbackText>{"CAIO"}</AvatarFallbackText>
              <AvatarImage
                alt={`${"CAIO"}'s profile`}
                source={{ uri: "https://api.dicebear.com/7.x/bottts-neutral/png?seed=C" }}
              />
            </Avatar>

            <FormControl
              w="$full"
              size="md"
              alignSelf="center"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <FormControlLabel mb="$1">
                <FormControlLabelText>Name</FormControlLabelText>
              </FormControlLabel>
              <Input size="lg">
                <InputField placeholder="Full name" />
              </Input>

              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>

            <HStack justifyContent="flex-end" space="md" my={10} alignItems="center">
              <Text>Is a child?</Text>
              <Switch
                size="lg"
                defaultValue={true}
                thumbColor="$success400"
                trackColor={{
                  true: "$success200",
                  false: "$bg100"
                }}
              />
            </HStack>

            <Button rounded="$full" mt={20} bgColor="$primary400" onPress={onSubmit}>
              <ButtonText mx={10} color="$bg0">Create new profile</ButtonText>
              <Icon as={SmilePlus} size="lg" color="$bg0" />
            </Button>

            <Button variant="link" mt={20} onPress={onClose}>
              <ButtonText color="$secondary300" mx={20}>Cancel</ButtonText>
            </Button>
          </Box>
        </KeyboardAvoidingView>
      </ActionsheetContent>
    </Actionsheet>
  );
}