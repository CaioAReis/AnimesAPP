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
  useToken,
} from "@gluestack-ui/themed";

const stars = [1, 2, 3, 4, 5];

export function Rating() {
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const starColor = useToken("colors", "primary400");

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
        bgColor="$bg100"
        onPress={() => setIsOpen(true)}
      >
        <ButtonIcon as={ThumbsUp} size="xl" color="$text100" />
      </Button>

      <Actionsheet isOpen={isOpen} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop bgColor="$bg400" />
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
              {stars?.map(star => (
                <Button key={star} onPress={() => setRating(star)} bgColor="transparent" w="$1/6">
                  <Icon
                    as={Star}
                    size={"30" as "xl"}
                    color={rating >= star ? starColor : "$bg300"}
                    fill={rating >= star ? starColor : "transparent"}
                  />
                </Button>
              ))}
            </HStack>

            <Button
              mt={40}
              rounded="$full"
              onPress={onSubmit}
              disabled={!rating}
              bgColor={starColor}
              opacity={rating ? 1 : 0.7}
            >
              <ButtonText mx={20} color="$bg0">Enviar Avaliação</ButtonText>
              <Icon as={Send} color="$bg0" size="lg" />
            </Button>
          </Box>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
}