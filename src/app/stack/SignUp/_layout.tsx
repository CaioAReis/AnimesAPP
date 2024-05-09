import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AlertCircleIcon, ArrowLeft, Eye, EyeOff, Lock, Mail, User2, UserRoundPlus } from "lucide-react-native";
import { Box, Button, ButtonText, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, HStack, Heading, Icon, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import { regexs, validates } from "@/config/utils";

interface formType {
  name: string,
  email: string,
  password: string,
}

export default function SignUp() {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = useCallback(() => setShowPass(prev => !prev), []);

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit =  (data: formType) => {
    console.warn(data);

    router.push("stack/SelectProfile");
  };

  return (
    <ScrollView px={20}>
      <Button onPress={() => router.back()} my={40} variant="link" size="xl" w="$10" rounded="$full">
        <Icon as={ArrowLeft} size={"40" as "xl"} />
      </Button>

      <Box my={20}>
        <Heading fontSize="$3xl" lineHeight="$3xl">Create</Heading>
        <Heading color="$primary400" fontSize="$3xl" lineHeight="$3xl">New Account</Heading>
      </Box>

      <KeyboardAvoidingView behavior="padding">
        <VStack my={40} space="2xl">
          <Controller
            name="name"
            control={control}
            rules={{
              required: "The name is required",
              pattern: { value: regexs.NAME, message: "Name invalid." }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl
                w="$full"
                size="lg"
                isRequired={true}
                alignSelf="center"
                isInvalid={Boolean(errors?.name)}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText color={errors?.name ? "$error700" : "$bg700"}>
                    Full Name
                  </FormControlLabelText>
                </FormControlLabel>

                <Input size="lg" variant="underlined">
                  <InputSlot mr={6}>
                    <InputIcon as={User2} color={errors?.name ? "$error700" : "$bg700"} />
                  </InputSlot>
                  <InputField
                    value={value}
                    onBlur={onBlur}
                    placeholder="Full Name"
                    onChangeText={onChange}
                  />
                </Input>

                {errors?.name && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      {errors?.name?.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
            )}
          />

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
              validate: { onCheckPass: v => validates.checkPassword(v) }
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
                  <FormControlLabelText color={errors?.password ? "$error700" : "$bg700"}>
                    Password
                  </FormControlLabelText>
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
                    <FormControlErrorText>
                      {errors?.password?.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
            )}
          />

          <VStack space="md" alignItems="center" mt={20}>
            <Button onPress={handleSubmit(onSubmit)} elevation={4} mt={20} w="80%" bgColor="$primary400" borderRadius="$full">
              <ButtonText color="$bg0" mx={20}>Create Account</ButtonText>
              <Icon as={UserRoundPlus} color="$bg0" />
            </Button>

            <HStack>
              <Text>Already have an account?</Text>
              <Link href="stack/SignIn" asChild>
                <Button variant="link" h="auto">
                  <ButtonText color="$primary400"> Log in</ButtonText>
                </Button>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}