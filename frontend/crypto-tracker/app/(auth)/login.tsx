import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
const Login = () => {
  const [text, setText] = useState("");
 const router = useRouter();
  return (
    <SafeAreaView className=" flex-1 justify-center bg-black">
      <Text className='text-center text-3xl font-bold text-white'>Welcome</Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="black"
        style={{marginTop:10 ,width:width*0.98, alignSelf: "center",}}
        label="Username"
        placeholder="Enter your Username"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Password"
        outlineColor="black"
        activeOutlineColor="black"
        style={{marginTop:10 ,width:width*0.98, alignSelf: "center",}}
        placeholder="Enter your Password"
        right={<TextInput.Affix text="/100" />}
      />
    
      <TouchableOpacity onPress={() => router.navigate("/(tabs)")}>
          <View         style={{marginTop:30 ,width:width*0.98, alignSelf: "center",}} className="h-14 bg-[#80013f] rounded justify-center items-center ">
            <Text className="text-white font-extrabold  text-xl ">Log in</Text>
          </View>
        </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Login;