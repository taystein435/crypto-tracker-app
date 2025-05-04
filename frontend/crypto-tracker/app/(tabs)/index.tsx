import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white dark:bg-black'>
      <Text className='text-red-500'>home</Text>
    </SafeAreaView>
  )
}

export default home