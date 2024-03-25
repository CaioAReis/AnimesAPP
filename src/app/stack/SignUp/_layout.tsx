import { Link, router } from "expo-router";
import { AlertCircleIcon, ArrowLeft, EyeOff, Lock, Mail, User2, UserRoundPlus } from "lucide-react-native";
import { Box, Button, ButtonText, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, HStack, Heading, Icon, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, ScrollView, Text, VStack } from "@gluestack-ui/themed";

export default function SignUp() {

  return (
    <ScrollView px={20}>
      <Button onPress={() => router.back()} my={40} variant="link" size="xl" w="$10" rounded="$full">
        <Icon as={ArrowLeft} size={"40" as "xl"} />
      </Button>

      <Box my={20}>
        <Heading fontSize="$3xl" lineHeight="$3xl">Create</Heading>
        <Heading fontSize="$3xl" lineHeight="$3xl">New Account</Heading>
      </Box>

      <KeyboardAvoidingView behavior="padding">
        <VStack my={40} space="2xl">
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
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input size="lg" variant="underlined">
              <InputSlot mr={6}>
                <InputIcon as={Mail} />
              </InputSlot>
              <InputField placeholder="Email" />
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
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input size="lg" variant="underlined">
              <InputSlot mr={6}>
                <InputIcon as={Lock} />
              </InputSlot>
              <InputField type="password" placeholder="Password" />
              <InputSlot mr={6}>
                <InputIcon as={EyeOff} />
              </InputSlot>
            </Input>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <VStack space="md" alignItems="center" mt={20}>
            <Button elevation={4} mt={20} w="80%" bgColor="$red500" borderRadius="$full">
              <ButtonText color="white" mx={20}>Create Account</ButtonText>
              <Icon as={UserRoundPlus} color="$white" />
            </Button>

            <HStack>
              <Text>Already have an account?</Text>
              <Link href="stack/SignIn" asChild>
                <Button variant="link" h="auto">
                  <ButtonText color="$red500"> Log in</ButtonText>
                </Button>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}