import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import ResetPasswordSuccess from './screens/ResetPasswordSuccess';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 3 detik loading
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Tampilkan loading screen
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require('./assets/nusatechno.png')} // Ganti dengan gambar splash
          style={styles.logo}
        />
        <Text style={styles.loadingText}>Sedang menyiapkan aplikasi...</Text>
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      </View>
    );
  }

  // Tampilkan aplikasi utama setelah loading selesai
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPasswordSuccess" component={ResetPasswordSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
});

export default App;
