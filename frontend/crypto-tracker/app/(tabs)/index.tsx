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
        <View className="flex-row justify-between gap-52 p-4">
          <View className="flex-row ">
            <Text className="text-white">Taiwo Babatunde</Text>
            <FontAwesome name="caret-down" size={24} color="white" />
                 
          </View>
          <View className="flex-row">
          <TouchableOpacity className="bg-gray-400 " style={{ borderRadius: 50 }}>
          <MaterialCommunityIcons name="qrcode" size={24} color="white" />
              </TouchableOpacity>        
              <TouchableOpacity className="bg-gray-400 " style={{ borderRadius: 50 }}>
      
              <MaterialCommunityIcons
              name="bell-badge-outline"
              size={24}
              color="white"
            />
              </TouchableOpacity>              

          </View>
          <View>
          <TouchableOpacity>
            <Text></Text>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <View>
            <TouchableOpacity>
              <Feather name="arrow-up-left" size={24} color="white" />
              <Text>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="arrow-up-right" size={24} color="white" />
              <Text>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="plus" size={24} color="white" />
              <Text>Buy</Text>
            </TouchableOpacity>
          </View>
          
          </View>
        </View>
      </SafeAreaView>
      <View className="flex-1 rounded-tl-md rounded-tr-md bg-white"></View>
    </View>
  );
};

export default home;
