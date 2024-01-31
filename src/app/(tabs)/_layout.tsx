import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { Center, Icon } from "@gluestack-ui/themed";
import { Heart, Home, LucideIcon, Search, UserRound } from "lucide-react-native";

interface TabButtonProps {
  size?: number,
  color?: string,
  icon: LucideIcon,
  focused?: boolean,
}

const TabButton = ({ color, icon }: TabButtonProps) => (
  <BlurView intensity={100} style={{ width: "100%", height: "100%" }}>
    <Center h="$full" w="$full">
      <Icon as={icon} color={color} />
    </Center>
  </BlurView>
);

export default function TabsApp() {

  return (
    <Tabs
      backBehavior="none"
      initialRouteName="home/index"
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        freezeOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          title: "INÍCIO",
          tabBarIcon: ({ color }) => <TabButton icon={Home} color={color} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "PESQUISAR",
          tabBarIcon: ({ color }) => <TabButton icon={Search} color={color} />,
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "SALVOS",
          tabBarIcon: ({ color }) => <TabButton icon={Heart} color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "PERFIL",
          tabBarIcon: ({ color }) => <TabButton icon={UserRound} color={color} />,
        }}
      />

    </Tabs>
  );
}