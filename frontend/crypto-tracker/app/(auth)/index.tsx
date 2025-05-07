import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Image } from "expo-image";


const { width, height } = Dimensions.get("window");

const Onboarding= ({ navigation }:any) => {
  return (
    <View className="flex-1 relative">
      <Image
        className="absolute"
        style={{ width, height }}
        source="https://images.unsplash.com/photo-1645731504331-72636399448e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxjcnlwdG98ZW58MHx8MHx8fDA%3D"
        contentFit="cover"
        transition={1000}
      />

      <Text className="absolute top-1/2 font-bold text-black text-8xl px-4 ">
    Run. Thrive. Energize.
      </Text>

      <View className="absolute bottom-16 w-full px-4 ">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View className="w-full h-14 bg-white rounded justify-center items-center">
            <Text className="text-black font-bold text-lg">Log in</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View className="w-full h-14 bg-black rounded justify-center items-center mt-3">
            <Text className="text-white font-bold text-lg">Join now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
