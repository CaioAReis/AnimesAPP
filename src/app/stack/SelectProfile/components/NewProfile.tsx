import { Controller, useForm } from "react-hook-form";
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
  useToken,
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

import { regexs } from "@/config/utils";

interface NewProfileProps {
  isOpen: boolean,
  onClose: () => void,
}

export function NewProfile({ isOpen, onClose }: NewProfileProps) {
  const switchSuccess = useToken("colors", "primary500");
  const switchBg = useToken("colors", "bg200" as "primary500");
  const switchThumb = useToken("colors", "primary50" as "primary500");

  interface formType {
    name: string,
    isChild: boolean,
  }

  const { control, handleSubmit, watch, formState: { errors }, } = useForm({
    defaultValues: { name: "", isChild: false },
  });

  const onSubmit = (data: formType) => {
    console.warn(data);

    alert("CREATE A NEW PROFILE");
    onClose();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop bgColor="$bg500" />
      <ActionsheetContent h="60%" zIndex={999} bgColor="$bg0">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <KeyboardAvoidingView w="$full" behavior="height">
          <Box px={20} mt={10} w="$full">
            <Heading>New Profile</Heading>

            <Avatar my={20} alignSelf="center" bgColor="transparent" size="xl" borderRadius="$full">
              <AvatarFallbackText>{"CAIO"}</AvatarFallbackText>
              <AvatarImage
                alt={`${watch("name")}'s profile`}
                source={{ uri: `https://api.dicebear.com/8.x/bottts/png?seed=${watch("name")}` }}
              />
            </Avatar>

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
                      Name
                    </FormControlLabelText>
                  </FormControlLabel>

                  <Input size="lg" variant="underlined">
                    <InputField
                      value={value}
                      onBlur={onBlur}
                      placeholder="Name"
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
              name="isChild"
              control={control}
              render={({ field: { onChange, value } }) => (
                <HStack justifyContent="flex-end" space="md" my={10} alignItems="center">
                  <Text>Is a child?</Text>
                  <Switch
                    size="lg"
                    onChange={onChange}
                    defaultValue={value}
                    thumbColor={switchThumb}
                    trackColor={{ true: switchSuccess, false: switchBg }}
                  />
                </HStack>
              )}
            />

            <Button rounded="$full" mt={20} bgColor="$primary400" onPress={handleSubmit(onSubmit)}>
              <ButtonText mx={10} color="$bg0">Create new profile</ButtonText>
              <Icon as={SmilePlus} size="lg" color="$bg0" />
            </Button>

            <Button variant="link" mt={20} onPress={onClose}>
              <ButtonText color="$error400" mx={20}>Cancel</ButtonText>
            </Button>
          </Box>
        </KeyboardAvoidingView>
      </ActionsheetContent>
    </Actionsheet>
  );
}