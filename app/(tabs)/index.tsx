import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import Searchbar from "@/components/Searchbar";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="inverted" />
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <Searchbar
          onPress={()=>router.push('/search')}
        />
      </ScrollView>
    </View>
  );
}
