import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
  
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#fff" /> {/* Use FontAwesome icon */}
      </TouchableOpacity>

      <Image source={require('../assets/image/user.png')} style={styles.profileIcon} />

      <Text style={styles.welcomeText}>Sign up Profile</Text>

      <View style={styles.formContainer}>
        {/* Username input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#B0B0B0"
        />
        
        {/* Email input */}
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#B0B0B0"
        />
        
        {/* Phone input */}
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#B0B0B0"
        />
        
        {/* Country input */}
        <TextInput
          style={styles.input}
          placeholder="Country"
          placeholderTextColor="#B0B0B0"
        />
        
        {/* Password input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />

        {/* Sign-up button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Link to Login screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
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
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 30,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
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
  loginText: {
    color: '#B0B0B0',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
  },
});

export default SignUp;
