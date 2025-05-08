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
        <View className="flex-row justify-between items-center gap-42 p-4 ">
          <View className="flex-row ">
            <Text className="text-white text=3xl">Taiwo Babatunde</Text>
            <FontAwesome name="caret-down" size={24} color="white" />
                 
          </View>
          <View className="flex-row">
          <TouchableOpacity className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg " style={{ borderRadius: 50, height: 50, width: 50, alignItems: "center", justifyContent: "center" }}>
          <MaterialCommunityIcons name="qrcode" size={24} color="white" />
              </TouchableOpacity>        
              <TouchableOpacity className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg " style={{ borderRadius: 50, height: 50, width: 50, alignItems: "center", justifyContent: "center" }}>
      
              <MaterialCommunityIcons
              name="bell-badge-outline"
              size={24}
              color="white"
            />
              </TouchableOpacity>              

          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text></Text>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <View className="flex-row justify-between items-center gap-y-36 p-4 ">
            <TouchableOpacity className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg ">
              <Feather name="arrow-up-left" size={24} color="white" />
              <Text className="text-white">Send</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg ">
              <Feather name="arrow-up-right" size={24} color="white" />
              <Text className="text-white">Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg ">
              <FontAwesome5 name="plus" size={24} color="white" />
              <Text className="text-white">Buy</Text>
            </TouchableOpacity>
          </View>
          
          </View>
      </SafeAreaView>
      <View className="flex-1 rounded-tl-md rounded-tr-md bg-white"></View>
    </View>
  );
};

export default home;
