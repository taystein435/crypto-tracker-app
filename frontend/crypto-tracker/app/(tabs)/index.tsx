import { View, Text, TouchableOpacity,FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Asset from "@/components/assets";
const data = [
  {     id: 1, title: "Jay", poster_path: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, title: "Saka", poster_path: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" },
  { id: 3, title: "Adrian", poster_path: "https://images.unsplash.com/photo-1672863601285-253fc82db868?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" },
  { id: 4, title: "Tunde", poster_path: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" },
  { id: 5, title: "Taiwo", poster_path: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" },
  {     id: 6, title: "Jay", poster_path: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, title: "Saka", poster_path: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" },
  { id: 8, title: "Adrian", poster_path: "https://images.unsplash.com/photo-1672863601285-253fc82db868?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" },
  { id: 9, title: "Tunde", poster_path: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" },
  { id: 10, title: "Taiwo", poster_path: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" },
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
          <TouchableOpacity className="flex-row mt-10 justify-between items-center gap-2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg mx-4">
            <Text className="text-white text-3xl font-extrabold">£100000 </Text>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-row justify-between items-center gap-y-36 mt-10 mb-10 p-4 ">
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
          renderItem={({ item }) => 
              <Image
                source={{
                  uri: item.poster_path,
                }}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 50,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  margin:4
                  
                }}
                contentFit="cover"
              />
            
           
          }
        />
      </View>
      <Asset/>
     </View>
    </View>
  );
};

export default home;
