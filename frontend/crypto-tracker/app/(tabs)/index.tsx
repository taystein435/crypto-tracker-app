import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const home = () => {
  return (
    <View className="flex-1 ">
      <View className="flex-1 bg-blue-400">
        <View>
          <View>
          <Text>Taiwo Babatunde</Text>
          <FontAwesome name="caret-down" size={24} color="black" />
          </View>
       <View>
       <MaterialCommunityIcons name="qrcode" size={24} color="black" />
       <MaterialCommunityIcons
            name="bell-badge-outline"
            size={24}
            color="black"
          />
      
       </View>
      <TouchableOpacity>
        <Text></Text>
      <FontAwesome name="caret-down" size={24} color="black" />
      </TouchableOpacity>
      <Text>

      </Text>
      <Text>
        
        </Text>
        <View>
        <TouchableOpacity>
    
        <Feather name="arrow-up-left" size={24} color="black" />
      <Text>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity>
    
      <Feather name="arrow-up-right" size={24} color="black" />
      <Text>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      
      <FontAwesome5 name="plus" size={24} color="black" />
      <Text>Buy</Text>
      </TouchableOpacity>
        </View>
        </View>
      </View>
      <View className="flex-1 rounded-tl-md rounded-tr-md bg-white"></View>
    </View>
  );
};

export default home;
