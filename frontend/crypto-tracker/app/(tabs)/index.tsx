import { View, Text, TouchableOpacity,FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const data = [
  {     id: 1, title: "Jay", poster_path: "/path/to/poster1.jpg" },
  { id: 2, title: "Saka", poster_path: "/path/to/poster2.jpg" },
  { id: 3, title: "Adrian", poster_path: "/path/to/poster3.jpg" },
  { id: 4, title: "Tunde", poster_path: "/path/to/poster4.jpg" },
  { id: 5, title: "Taiwo", poster_path: "/path/to/poster5.jpg" },
]
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
          <View className="flex-row justify-between items-center gap-y-36 mt-5 p-4 ">
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
     <View className="flex-1  bg-white backdrop-blur-md border border-white/20 rounded-t-3xl shadow-lg mt-[-40px]"> 
     <View className="">
        <Text className="text-black text-2xl font-bold p-4">
          Recents
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="mr-4"
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                overflow: "hidden",
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: item.poster_path,
                }}
            
                contentFit="cover"
              />
              <Text
                className="text-black text-sm mt-1 "
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
     </View>
    </View>
  );
};

export default home;
