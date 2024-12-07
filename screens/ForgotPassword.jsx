import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
      {/* Back Button with Icon */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>
          <Icon name="arrow-left" size={30} color="#fff" /> 
        </Text>
      </TouchableOpacity>

      <Image source={require('../assets/image/forgot-password.png')} style={styles.icon} />

      <Text style={styles.title}>Forgot your Password?</Text>
      <Text style={styles.subtitle}>We will send you a link to reset your password.</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity  onPress={() => navigation.navigate("ResetPassword")}  style={styles.button} >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 20,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginBottom: 30,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    color: '#B0B0B0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2C2C2C',
    color: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#D32F2F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ForgotPassword;
