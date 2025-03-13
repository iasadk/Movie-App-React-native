import { Stack } from "expo-router";
import "./global.css"
export default function RootLayout() {
  return <Stack screenOptions={{
    contentStyle:{
      backgroundColor:"#030014"
    }
  }}>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>;
}
