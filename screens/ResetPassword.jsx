import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const ResetPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
           <Image source={require('../assets/image/unlock.png')} style={styles.profileIcon} />
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="New password"
        placeholderTextColor="#aaa"
        // secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm password"
        placeholderTextColor="#aaa"
        // secureTextEntry
        style={styles.input}
      />
     <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("ResetPasswordSuccess")} 
>
  <Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", alignItems: "center", justifyContent: "center" },
  title: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  input: { backgroundColor: "#1f1f1f", color: "white", borderRadius: 8, padding: 12, width: "80%", marginBottom: 20 },
  button: { backgroundColor: "red", padding: 15, borderRadius: 8, width: "80%", alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 30,
  },
});

export default ResetPassword;
