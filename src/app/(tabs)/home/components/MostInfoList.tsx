import { useState } from "react";
import MostInfoCard, { MostInfoCardProps } from "./MostInfoCard";
import { Box, HStack, Heading } from "@gluestack-ui/themed";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from "react-native";

interface MostInfoListProps {
  title: string,
  list: MostInfoCardProps[],
}

export default function MostInfoList({ title, list }: MostInfoListProps) {
  const { width } = useWindowDimensions();
  const [currentStep, setCurrentStep] = useState(0);

  const onChangeStep = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentStep(parseInt(e.nativeEvent.contentOffset.x / (width - 40) + ""));
  };

  const stepWidth = (i: number) => currentStep === i ? 20 : 10;
  const stepColor = (i: number) => currentStep === i ? "$red500" : "$black";

  return (
    <Box>
      <Heading ml={20} my={15}>
        {title}
      </Heading>

      <Box>
        <FlatList
          horizontal
          data={list}
          pagingEnabled
          onMomentumScrollEnd={onChangeStep}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MostInfoCard
              title={item?.title}
              image={item?.image}
              categories={item?.categories}
              description={item?.description}
            />
          )}
        />

        <HStack alignItems="center" justifyContent="center" space="sm">
          {list?.map((item, i) => (
            <Box
              h={6}
              key={i}
              rounded="$full"
              w={stepWidth(i)}
              bgColor={stepColor(i)}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}