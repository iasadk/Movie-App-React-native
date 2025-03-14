import { Stack } from "expo-router";
import "./global.css"
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return <>
    <StatusBar style="inverted" />
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: "#030014"
      }
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
    </Stack>
  </>;
}
