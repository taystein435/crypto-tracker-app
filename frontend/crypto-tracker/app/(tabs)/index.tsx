import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const home = () => {
  return (
    <View className="flex-1 ">
      <SafeAreaView className="flex-1 bg-blue-400">
        <View className="flex-row justify-between items-center gap-42 p-3 ">
          <View className="flex-row gap-2 items-center ">
            <Text className="text-white text-3xl">Taiwo Babatunde</Text>
            <FontAwesome name="caret-down" size={24} color="white" />
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg "
              style={{
                borderRadius: 50,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons name="qrcode" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg "
              style={{
                borderRadius: 50,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="bell-badge-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity className="flex-row mt-16 justify-between items-center gap-2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg mx-4">
            <Text className="text-white text-5xl font-bold">£100000 </Text>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-row justify-between items-center gap-y-36 mt-10 p-4 ">
            <View className="items-center">
              <TouchableOpacity
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg "
                style={{
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="arrow-up-left" size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-white">Send</Text>
            </View>

            <View className="items-center">
              <TouchableOpacity
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg "
                style={{
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome5 name="plus" size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-white">Buy</Text>
            </View>
            <View className="items-center">
              <TouchableOpacity
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg "
                style={{
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="arrow-up-right" size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-white">Receive</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View className="flex-1 rounded-tl-md rounded-tr-md bg-white"></View>
    </View>
  );
};

export default home;
