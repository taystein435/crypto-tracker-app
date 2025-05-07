import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "../global.css"
import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <PaperProvider>
      <Slot/>
      <StatusBar style="auto" />
     </PaperProvider>
    </ThemeProvider>
  );
}
