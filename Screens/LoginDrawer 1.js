import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const LoginDrawer = ({ isVisible, onClose, onLogin }) => {
  const [membershipID, setMembershipID] = useState('');
  const [password, setPassword] = useState('');
  const [membershipIDError, setMembershipIDError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const navigation = useNavigation();

  const handleToggleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  const handleForgot = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const handleShebaMiles = () => {
    navigation.navigate('JoinShebaMilesScreen');
  };

  const handleLogin = () => {
    // Perform validation here before login
    if (membershipID.trim() === '') {
      setMembershipIDError(true);
    } else {
      setMembershipIDError(false);
    }

    if (password.trim() === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (membershipID.trim() !== '' && password.trim() !== '') {
      // Call the onLogin function with the login credentials
      onLogin(membershipID, password);

      // Simulate login success after a short delay (replace this with actual login logic)
      setTimeout(() => {
        // Show an alert when login is successful
        Alert.alert(
          'Login Successful',
          'You have successfully logged in!',
          [
            { text: 'OK', onPress: () => { setMembershipID(''); setPassword(''); } }
          ]
        );
      }, 1000);
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
    <View style={styles.loginDrawer}>
      <Text style={styles.logintitle}>ShebaMiles Login</Text>
      <TextInput
        style={[styles.input, membershipIDError && styles.inputError]}
        placeholder="Membership ID*"
        value={membershipID}
        onChangeText={setMembershipID}
      />
      {membershipIDError && <Text style={styles.errorText}>Membership ID is required</Text>}
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        placeholder="Password*"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {passwordError && <Text style={styles.errorText}>Password is required</Text>}

      <View style={styles.keepLoggedInContainer}>
        <Text style={styles.buttonText}>Keep me Logged in</Text>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            { backgroundColor: keepLoggedIn ? '#4CAF50' : '#ccc' },
          ]}
          onPress={handleToggleKeepLoggedIn}
        >
          <Text style={styles.toggleButtonText}>
            {keepLoggedIn ? 'ON' : 'OFF'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} onLogin={onClose}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgot}>
        <Text style={styles.dontAllowText}>I Can't Access My Account</Text>
      </TouchableOpacity>

      <Text style={styles.buttonText}>Not a ShebaMiles Member?</Text>

      <TouchableOpacity style={styles.joinButton} onPress={handleShebaMiles}>
        <Text style={styles.joinButtonText}>Join ShebaMiles</Text>
      </TouchableOpacity>
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  loginDrawer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  logintitle: {
    alignSelf: 'center',
    fontWeight: '700',

  },
  successMessage: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  successText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red', // Change the border color to red when there's an error
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  joinButton: {
    backgroundColor: 'green',
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  keepLoggedInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dontAllowText: {
    fontSize: 16,
    color: '#3CB043',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  buttonText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LoginDrawer;
