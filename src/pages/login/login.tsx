import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/logo.jpeg";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.text}>
            Ajuda
          </Text>
        </TouchableOpacity>
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

      <Text style={styles.ou}>
        OU
      </Text>

      <TouchableOpacity
        style={styles.buttonOu}
      >
        <Text style={styles.buttonText}>
          Usar um código de acesso
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text1}>
        <Text style={styles.text}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>

      <Text style={styles.text2}>
        O acesso está protegido pelo Google reCAPTCHA
        para garantir que você não é um robô.<Text style={{ fontWeight: 'bold' }}> Saiba mais.</Text>
      </Text>

    </View>
  )
}
export default Login;