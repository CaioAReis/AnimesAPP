import { Tabs } from "expo-router";
import { Center, Icon, useToken } from "@gluestack-ui/themed";
import { Heart, Home, LucideIcon, Search, UserRound } from "lucide-react-native";

interface TabButtonProps {
  size?: number,
  color?: string,
  icon: LucideIcon,
  focused?: boolean,
}

const TabButton = ({ color, icon, focused, }: TabButtonProps) => (
  <Center>
    <Icon as={icon} color={focused ? "$primary600" : color} />
  </Center>
);

export default function TabsApp() {
  const tintColor = useToken("colors", "primary200");
  const bg = useToken("colors", "bg0" as "primary400");
  const activeBGColor = useToken("colors", "primary100");

  return (
    <Tabs
      backBehavior="none"
      initialRouteName="home"
      sceneContainerStyle={{ backgroundColor: bg }}
      screenOptions={{
        lazy: true,
        headerShown: false,
        freezeOnBlur: true,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { bottom: 6 },
        tabBarActiveTintColor: tintColor,
        tabBarInactiveBackgroundColor: bg,
        tabBarActiveBackgroundColor: activeBGColor,
        tabBarStyle: { elevation: 0, height: 45, borderColor: tintColor },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "INÍCIO",
          tabBarIcon: ({ color, focused }: Partial<TabButtonProps>) => (
            <TabButton focused={focused} icon={Home} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "PESQUISAR",
          tabBarIcon: ({ color, focused }: Partial<TabButtonProps>) => (
            <TabButton focused={focused} icon={Search} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "SALVOS",
          tabBarIcon: ({ color, focused }: Partial<TabButtonProps>) => (
            <TabButton focused={focused} icon={Heart} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "PERFIL",
          tabBarIcon: ({ color, focused }: Partial<TabButtonProps>) => (
            <TabButton focused={focused} icon={UserRound} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}