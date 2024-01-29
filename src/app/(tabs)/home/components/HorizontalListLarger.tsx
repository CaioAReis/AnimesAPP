import { Box, HStack, Heading, ScrollView } from "@gluestack-ui/themed";

import { CardLarger } from "../../../../components";
import { CardLargerProps } from "../../../../components/CardLarger";

interface HorizontalListLargerProps {
  title: string,
  list: CardLargerProps[],
}

export default function HorizontalListLarger({ title, list }: HorizontalListLargerProps) {

  return (
    list?.length > 0 && (
      <Box>
        <Heading ml={20} my={15}>{title}</Heading>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="md">
            <Box w={10} />

            {list?.map((item, i) => (
              <CardLarger
                key={i}
                image={item?.image}
                title={item?.title}
                duration={item?.duration}
                description={item?.description}
              />
            ))}

            <Box w={10} />
          </HStack>
        </ScrollView>
      </Box>
    )
  );
}