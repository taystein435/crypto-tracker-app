import { View, Text, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";


const { width, height } = Dimensions.get("window");

const Onboarding= () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Image
        className=""
        style={{ width:width*0.9, height:height * 0.5 ,borderRadius:10}}
source="https://images.unsplash.com/photo-1645731504331-72636399448e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxjcnlwdG98ZW58MHx8MHx8fDA%3D"
        contentFit="cover"
        transition={1000}
      />

      <Text className="font-bold text-black text-2xl mt-10 text-center">
    Your one-stop solution for securing and managing your crypto assets
      </Text>

      <View className="  w-full mt-9 px-4 ">
        <TouchableOpacity onPress={() => router.navigate("/login")}>
          <View className="w-full h-14 bg-blue-600 rounded justify-center items-center">
            <Text className="text-white font-bold text-lg">Let&apos;s start</Text>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
