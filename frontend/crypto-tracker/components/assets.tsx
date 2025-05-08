import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");

const Asset = () => {
  interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
  }
  
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCoinData = async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
      const data = await res.json();
      setCoins(data);
    } catch (error) {
      console.error("Failed to fetch coin data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center mt-20">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View>
   <Text className="text-black text-2xl font-bold p-4">
          Recents
        </Text>
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
              paddingHorizontal: 16,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 50, width: 50, borderRadius: 25 }}
                contentFit="contain"
                transition={300}
              />
              <View style={{ marginLeft: 20 }}>
                <Text className="text-black font-bold text-lg">{item.name}</Text>
                <Text className="text-black text-sm">Symbol: {item.symbol.toUpperCase()}</Text>
              </View>
            </View>
            <Text className="text-blaack font-semibold text-lg self-center">
              ${item.current_price.toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Asset;
