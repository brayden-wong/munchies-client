import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Header, createStackNavigator } from "@react-navigation/stack";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import Login from "./screens/login/login";
import ModalScreen from "./modal";
import SignUp from "./screens/login/signup";
import * as Linking from "expo-linking";
import Recipe from "./screens/recipe";
import Tabs from "./screens/tabs";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <LoadingScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

const LoadingScreen = () => {
  return (
    <Stack>
      <Stack.Screen name="loading" options={{ headerShown: false }} />
    </Stack>
  );
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);
  const Stack = createStackNavigator();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="screens/login/login" component={Login} />
          <Stack.Screen
            name="screens/login/signup"
            component={SignUp}
            options={{
              title: "Reminder",
            }}
          />
          <Stack.Screen name="screens/tabs/index" component={Tabs} />
          <Stack.Screen name="modal" component={ModalScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </>
  );
}
