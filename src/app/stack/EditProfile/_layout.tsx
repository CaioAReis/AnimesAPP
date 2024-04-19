import { router } from "expo-router";
import { Platform } from "react-native";
import { AlertCircleIcon, ArrowLeft, User2, UserCheck2 } from "lucide-react-native";
import {
  Box,
  Icon,
  Input,
  Button,
  Avatar,
  HStack,
  VStack,
  Heading,
  Textarea,
  InputSlot,
  InputIcon,
  ButtonIcon,
  ButtonText,
  InputField,
  ScrollView,
  AvatarImage,
  FormControl,
  TextareaInput,
  FormControlError,
  FormControlLabel,
  AvatarFallbackText,
  KeyboardAvoidingView,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabelText,
} from "@gluestack-ui/themed";

export default function EditProfile() {

  return (
    <ScrollView px={20}>
      <KeyboardAvoidingView behavior={Platform.select({ ios: "padding" })}>
        <HStack my={10} alignItems="center" justifyContent="space-between">
          <Button w={40} h={40} bgColor="transparent" onPress={() => router.back()}>
            <ButtonIcon as={ArrowLeft} size={"25" as "xl"} color="$textDark900" />
          </Button>
          <Heading>Edit profile</Heading>
          <Box w={40} />
        </HStack>

        <VStack my={40} space="2xl">
          <Avatar my={10} alignSelf="center" bgColor="$amber600" size="xl" borderRadius="$full">
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
              <FormControlLabelText>Full Name</FormControlLabelText>
            </FormControlLabel>
            <Input size="lg" variant="underlined">
              <InputSlot mr={6}>
                <InputIcon as={User2} />
              </InputSlot>
              <InputField placeholder="Full Name" />
            </Input>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

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
              <FormControlLabelText>Bio</FormControlLabelText>
            </FormControlLabel>

            <Textarea
              size="md"
              w="$full"
              variant="default"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
            >
              <TextareaInput placeholder="Your bio goes here..." />
            </Textarea>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

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
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input size="lg" variant="underlined">
              <InputField placeholder="Email" />
            </Input>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Button alignSelf="center" elevation={4} mt={40} w="80%" bgColor="$orange400" borderRadius="$full">
            <ButtonText color="white" mx={20}>Save changes</ButtonText>
            <Icon as={UserCheck2} color="$white" />
          </Button>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}