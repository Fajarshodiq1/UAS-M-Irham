import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { home } from "./components/home";
import todoDetails from "./components/todoDetails";
import { Provider } from "react-redux";
import store from "./src/app/store";
import LoginForm from "./components/loginForm";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={home}
              options={{ title: "Daily Planner" }}
            />
            <Stack.Screen name="todoDetails" component={todoDetails} />
          </Stack.Navigator>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </NavigationContainer>
    </Provider>
  );
}
