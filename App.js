import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';


export default function App() {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const _submitLogin = () => {
    if (userEmail.length < 5) {
      Alert.alert("Por favor, ingrese un correo electrónico");
      return;
    }
    if (userPassword.length < 5) {
      Alert.alert("Por favor, ingrese su contraseña");
      return;
    }

    console.log(userEmail);
    console.log(userPassword);
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Email"
          value={userEmail}
          onChangeText={(t) => setUserEmail(t)}
          style={styles.textInput}
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(t) => setUserPassword(t)}
          style={styles.textInput}
        />
        <Button contentStyle={styles.submitBtnContent} style={styles.submitBtn} mode="contained" onPress={_submitLogin}>
          Iniciar Sesión
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 32,
  },
  textInput: { marginBottom: 8, width: "100%" },
  submitBtn: { marginTop: 16, width: "100%" },
  submitBtnContent: { paddingVertical: 8 }

});
