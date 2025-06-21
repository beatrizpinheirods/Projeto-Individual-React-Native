import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import lupa from "../../assets/lupa.png";
import download from "../../assets/download.png";
import bb from "../../assets/bb.jpeg";
import home from  "../../assets/home.png";
import play from  "../../assets/play.png";
import perfil from  "../../assets/perfil.jpg"

const Home = () => {
  return (
    <LinearGradient colors={['#521817', '#2D0D0E', '#190707']}
      style={styles.container}>
     
        <View style={styles.boxTitleIcons}>
          <Text style={styles.title}>
            Para Bia
          </Text>

          <View style={styles.boxIcons}>
            <TouchableOpacity>
              <Image source={download} style={styles.icons} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={lupa} style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Séries
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Filmes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Categorias
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}>
           <Image source={bb} style={styles.image}/>
           <View style={styles.itensImage}>
            <Text style={styles.textImage}>
              Violento • Impactante • Suspense
           </Text>
           <View style={styles.buttonsImage}>
             <TouchableOpacity style={styles.buttonImage1}>
            <Text style={styles.textButton1}>
              ▶ Assistir
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonImage2}>
            <Text style={styles.textButton2}>
              + Minha lista
            </Text>
          </TouchableOpacity>
           </View>
           </View>
        </View>

        <View style={styles.footer}>

           <View style={styles.boxFoter}>

            <TouchableOpacity style={styles.intensFooter}>
              <Image source={home} style={styles.iconsFooter} />
              <Text style={styles.textIcons}>Início</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.intensFooter}>
              <Image source={play} style={styles.iconsFooter} />
              <Text style={styles.textIcons}>Novidades</Text>

            </TouchableOpacity>

              <Pressable style={styles.intensFooter}>
              <Image source={perfil} style={styles.imagePerfil} />
              <Text style={styles.textPerfil}>Minha Netflix</Text>
              </Pressable>
           
          </View>

          </View>
    </LinearGradient>
  )
}
export default Home;