import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useLogin } from '../../components/useLogin';

const HomeScreen: React.FC = () => {
  const { formData, handleInputChange, handleLogin } = useLogin();

  const handlePress = () => {
    handleLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={formData.username}
        onChangeText={(value) => handleInputChange('username', value)}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f0f0f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    fontFamily: 'sans-serif-medium',
  },
  input: {
    height: 55,
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#6200ea',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.5,
  },
});

export default HomeScreen;
