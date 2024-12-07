import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const ResetPasswordSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Image source={require('../assets/image/done.png')} style={styles.profileIcon} />
      <Text style={styles.title}>Password Reset</Text>
      <Text style={styles.subtitle}>Password reset successful</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")} 
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", alignItems: "center", justifyContent: "center" },
  title: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "white", fontSize: 16, marginBottom: 30 },
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

export default ResetPasswordSuccess;
