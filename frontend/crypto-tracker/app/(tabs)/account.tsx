import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';

const cryptoProfileData = [
  {
    id: 1,
    title: "Username",
    description: "taiwobtc",
    icon: <MaterialCommunityIcons name="account-circle" size={24} color="black" />,
  },
  {
    id: 2,
    title: "Email",
    description: "taiwo@example.com",
    icon: <MaterialCommunityIcons name="email-outline" size={24} color="black" />,
  },
  {
    id: 3,
    title: "Wallet Balance",
    description: "$5,000",
    icon: <MaterialCommunityIcons name="wallet" size={24} color="black" />,
  },
  {
    id: 4,
    title: "Top Asset",
    description: "Bitcoin (BTC)",
    icon: <MaterialCommunityIcons name="bitcoin" size={24} color="black" />,
  },
  {
    id: 5,
    title: "Portfolio ROI",
    description: "+23.4%",
    icon: <MaterialCommunityIcons name="chart-line" size={24} color="black" />,
  },
  {
    id: 6,
    title: "Last Transaction",
    description: "Bought ETH - $500",
    icon: <MaterialCommunityIcons name="swap-horizontal" size={24} color="black" />,
  },
  {
    id: 7,
    title: "Security Level",
    description: "2FA Enabled",
    icon: <MaterialCommunityIcons name="shield-lock" size={24} color="black" />,
  },
  {
    id: 8,
    title: "Account Status",
    description: "Verified",
    icon: <MaterialCommunityIcons name="check-decagram" size={24} color="black" />,
  },
];

const CryptoAccount = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
   
      <Image
        style={{
          borderColor: "#2563EB",
          borderWidth: 3,
          marginVertical: 25,
          height: 100,
          width: 100,
          borderRadius: 50,
          alignSelf: "center",
        }}
        source="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        contentFit="cover"
      />

      <FlatList
        data={cryptoProfileData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
              paddingHorizontal: 24,
            }}
          >
            {item.icon}
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>{item.title}</Text>
              <Text style={{ fontSize: 14, color: 'black' }}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CryptoAccount;
