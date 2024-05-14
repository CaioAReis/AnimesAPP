import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Controller, FieldValue, useForm } from "react-hook-form";
import { AlertCircleIcon, ArrowLeft, Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react-native";
import { Box, Button, Heading, Text, ButtonText, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, HStack, Icon, Input, InputField, InputIcon, InputSlot, VStack, ScrollView } from "@gluestack-ui/themed";

import { regexs, validates } from "@/config/utils";

interface formType {
  email: string,
  password: string,
}

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const handleShowPass = useCallback(() => setShowPass(prev => !prev), []);

  const onSubmit = (data: FieldValue<formType>) => {
    console.warn(data);

    router.push("stack/SelectProfile");
  };

  return (
    <ScrollView px={20}>
      <Button onPress={() => router.back()} my={40} variant="link" size="xl" w="$10" rounded="$full">
        <Icon as={ArrowLeft} size={"40" as "xl"} />
      </Button>

      <Box my={20}>
        <Heading fontSize="$3xl" lineHeight="$3xl">Hello</Heading>
        <Heading color="$primary400" fontSize="$3xl" lineHeight="$3xl">Log in to continue</Heading>
      </Box>

      <KeyboardAvoidingView behavior="padding">
        <VStack my={40} space="2xl">

          <Controller
            name="email"
            control={control}
            rules={{
              required: "The email is required",
              pattern: { value: regexs.EMAIL, message: "Email invalid." }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl
                w="$full"
                size="lg"
                isRequired={true}
                alignSelf="center"
                isInvalid={Boolean(errors?.email)}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText color={errors?.email ? "$error700" : "$bg700"}>
                    Email
                  </FormControlLabelText>
                </FormControlLabel>

                <Input size="lg" variant="underlined">
                  <InputSlot mr={6}>
                    <InputIcon as={Mail} color={errors?.email ? "$error700" : "$bg700"} />
                  </InputSlot>

                  <InputField
                    value={value}
                    onBlur={onBlur}
                    placeholder="Email"
                    onChangeText={onChange}
                  />
                </Input>

                {errors?.email && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      {errors?.email?.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "The password is required",
              validate: { onCheckPass: (v: string) => validates.checkPassword(v) }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl
                w="$full"
                size="lg"
                isRequired={true}
                alignSelf="center"
                isInvalid={Boolean(errors?.password)}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText color={errors?.password ? "$error700" : "$bg700"}>Password</FormControlLabelText>
                </FormControlLabel>

                <Input size="lg" variant="underlined">
                  <InputSlot mr={6}>
                    <InputIcon as={Lock} color={errors?.password ? "$error700" : "$bg700"} />
                  </InputSlot>

                  <InputField
                    value={value}
                    onBlur={onBlur}
                    placeholder="Password"
                    onChangeText={onChange}
                    type={showPass ? "text" : "password"}
                  />

                  <InputSlot mr={6} onPress={handleShowPass}>
                    <InputIcon as={showPass ? Eye : EyeOff} />
                  </InputSlot>
                </Input>

                {errors?.password && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>{errors?.password?.message}</FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
            )}
          />

          <VStack space="md" alignItems="center" mt={20}>
            <Button onPress={handleSubmit(onSubmit)} elevation={4} mt={20} w="80%" bgColor="$primary400" borderRadius="$full">
              <ButtonText color="$bg0" mx={20}>Log in</ButtonText>
              <Icon as={LogIn} color="$bg0" />
            </Button>

            <HStack>
              <Text>First time here?</Text>
              <Link href="stack/SignUp" asChild>
                <Button variant="link" h="auto">
                  <ButtonText color="$primary400"> Sign up</ButtonText>
                </Button>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}