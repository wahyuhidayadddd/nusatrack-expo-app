import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/image/mobil.webp')} style={styles.logo} />
      <Text style={styles.welcomeText}> NusaTrack</Text>

      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username/Email address"
          placeholderTextColor="#B0B0B0"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
        
        <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')} style={styles.linkButton}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('SignUp')}  
      >
        <Text style={styles.signupText}>Create an account</Text>
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
  logo: {
    width: 140,
    height: 120,
    marginBottom: 30,
    borderRadius: 6
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
  linkButton: {
    marginBottom: 20,
  },
  linkText: {
    color: '#A4A4A4',
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#D32F2F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    marginTop: 10,
  },
  signupText: {
    color: '#A4A4A4',
    fontSize: 14,
  },
});

export default Login;
