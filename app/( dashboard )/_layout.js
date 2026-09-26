import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const DashboardLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        paddingTop: 10,
        height: 90,
      },
      tabBarActiveTintColor: '#df8562',
      tabBarInactiveTintColor: '#8b8989'

    }}>
      <Tabs.Screen
        name="Browse"
        options={{
          title: "Browse", headerShown: false, tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? 'person' : 'person-outline'}
              color={focused ? "#df8562" : "#000"}

            />
          )
        }} />

      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites", tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? 'heart' : 'heart-outline'}
              color={focused ? "#df8562" : "#000"}

            />
          )
        }} />

      <Tabs.Screen
        name="Message"
        options={{
          title: "Messages", tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? 'mail' : 'mail-outline'}
              color={focused ? "#df8562" : "#000"}
            />
          )
        }} />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile", tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person-circle" : "person-circle-outline"}
              color={focused ? "#df8562" : "#000"}

            />
          )
        }} />
    </Tabs>
  )
}

export default DashboardLayout

