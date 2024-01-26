import { AtSignIcon, CalendarDaysIcon, FavouriteIcon, Icon, MessageCircleIcon } from "@gluestack-ui/themed";
import { Tabs } from "expo-router";

export default function TabsApp() {

  return (
    <Tabs backBehavior="none" initialRouteName="home/index" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "INÍCIO",
          freezeOnBlur: true,
          tabBarIcon: ({ color }) => <Icon as={CalendarDaysIcon} color={color} />,
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          title: "PESQUISAR",
          freezeOnBlur: true,
          tabBarIcon: ({ color }) => <Icon as={MessageCircleIcon} color={color} />,
        }}
      />

      <Tabs.Screen
        name="library/index"
        options={{
          title: "SALVOS",
          freezeOnBlur: true,
          tabBarIcon: ({ color }) => <Icon as={FavouriteIcon} color={color} />,
        }}
      />

      <Tabs.Screen
        name="account/index"
        options={{
          title: "PERFIL",
          freezeOnBlur: true,
          tabBarIcon: ({ color }) => <Icon as={AtSignIcon} color={color} />,
        }}
      />
    </Tabs>
  );
}