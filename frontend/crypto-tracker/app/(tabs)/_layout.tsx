import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabLayout() {
 
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
     
      tabBarStyle: {
        backgroundColor: 'white',
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
       
          <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />
        }}
      />  <Tabs.Screen
      name="trade"
      options={{
        title: 'Trade',
        tabBarIcon: ({ color }) =><Ionicons name="wallet-sharp" size={24} color={color}  />
      }}
    />
         <Tabs.Screen
        name="notification"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) =><MaterialIcons name="circle-notifications" size={24} color={color} />,
        }}
      />

    </Tabs>
  );
}
