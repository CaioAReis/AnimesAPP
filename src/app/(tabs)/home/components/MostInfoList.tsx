import { useState } from "react";
import MostInfoCard, { MostInfoCardProps } from "./MostInfoCard";
import { Box, HStack, Heading, ScrollView } from "@gluestack-ui/themed";
import { NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from "react-native";

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
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => onChangeStep(e)}
        >
          {list.map((item, i) => (
            <MostInfoCard
              key={i}
              title={item?.title}
              image={item?.image}
              categories={item?.categories}
              description={item?.description}
            />
          ))}
        </ScrollView>

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