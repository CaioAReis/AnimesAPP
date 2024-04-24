import { useState } from "react";
import { Send, Star, ThumbsUp } from "lucide-react-native";
import {
  Box,
  Icon,
  Text,
  HStack,
  Button,
  Heading,
  ButtonText,
  ButtonIcon,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from "@gluestack-ui/themed";

export function Rating() {
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const onSubmit = () => {
    alert("Enviar avaliação");

    setIsOpen(false);
  };

  return (
    <Box>
      <Button
        w={40} h={40}
        rounded="$full"
        bgColor="$backgroundLight50"
        onPress={() => setIsOpen(true)}
      >
        <ButtonIcon as={ThumbsUp} size="xl" color="$textDark900" />
      </Button>

      <Actionsheet isOpen={isOpen} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="auto" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <Box my={20}>
            <Heading textAlign="center">Avalie este conteúdo</Heading>
            <Text textAlign="center">Dê sua opinião</Text>
          </Box>

          <Box mb={100}>
            <HStack space="md" justifyContent="center">
              <Button onPress={() => setRating(1)} bgColor="transparent" w="$1/6">
                <Icon
                  as={Star}
                  size={"30" as "xl"}
                  fill={rating >= 1 ? "$primary400" : "transparent"}
                  color={rating >= 1 ? "$primary400" : "$backgroundLight400"}
                />
              </Button>

              <Button onPress={() => setRating(2)} bgColor="transparent" w="$1/6">
                <Icon
                  as={Star}
                  size={"30" as "xl"}
                  fill={rating >= 2 ? "$primary400" : "transparent"}
                  color={rating >= 2 ? "$primary400" : "$backgroundLight400"}
                />
              </Button>

              <Button onPress={() => setRating(3)} bgColor="transparent" w="$1/6">
                <Icon
                  as={Star}
                  size={"30" as "xl"}
                  fill={rating >= 3 ? "$primary400" : "transparent"}
                  color={rating >= 3 ? "$primary400" : "$backgroundLight400"}
                />
              </Button>

              <Button onPress={() => setRating(4)} bgColor="transparent" w="$1/6">
                <Icon
                  as={Star}
                  size={"30" as "xl"}
                  fill={rating >= 4 ? "$primary400" : "transparent"}
                  color={rating >= 4 ? "$primary400" : "$backgroundLight400"}
                />
              </Button>

              <Button onPress={() => setRating(5)} bgColor="transparent" w="$1/6">
                <Icon
                  as={Star}
                  size={"30" as "xl"}
                  fill={rating === 5 ? "$primary400" : "transparent"}
                  color={rating === 5 ? "$primary400" : "$backgroundLight400"}
                />
              </Button>
            </HStack>

            <Button
              mt={40}
              rounded="$full"
              bgColor="$red400"
              onPress={onSubmit}
              disabled={!rating}
              opacity={rating ? 1 : 0.7}
            >
              <ButtonText mx={20}>Enviar Avaliação</ButtonText>
              <Icon as={Send} color="white" size="lg" />
            </Button>
          </Box>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
}