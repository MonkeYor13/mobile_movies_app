import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20" />
        <View className="flex-1 mt-5">
          <SearchBar 
          onPress={() => router.push("/search")}
          placeholder="Search the Movie"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
