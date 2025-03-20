import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";


type Props = {
  onPress: () => void;
  placeholder: string;
};

const SearchBar = ({onPress, placeholder}: Props) => {
  const tintColor = "#ab8bff";
  const placeholderTextColor = "#a8b5db";

  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={tintColor}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={placeholderTextColor}
        className="text-white flex-1 ml-2"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
