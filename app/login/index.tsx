import React, { useState } from "react"
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from "react-native";

const login = () => {
  const [cpf, setCpf] = useState('');
  const [pass, setPass] = useState('');

  function handleSingIn() {
    console.log({
      cpf,
      pass,
    })
  }

  return (
    <View style= {styles.container}>
      <View style= {styles.container}>
        <Text>
          <span></span>
          login
        </Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={pass}
          onChangeText={setPass}
        />
        <TouchableOpacity
          onPress={handleSingIn}
        >
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default login;