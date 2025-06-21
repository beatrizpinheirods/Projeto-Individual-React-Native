import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/logo.jpeg";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.text}>
          Ajuda
        </Text>
      </View>

      <TextInput style={styles.input}
        placeholder="Email ou numero de telefone"
        placeholderTextColor="#cccccc">
      </TextInput>

      <TextInput style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#cccccc">
      </TextInput>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  )
}
export default Login;