import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',

  },

  boxTitleIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  boxIcons: {
    flexDirection: 'row',
    gap: 10,
  },

  icons: {
    tintColor: "#fff",
    width: 30,
    height: 30
  },

  boxButtons: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    gap: 10,

  },

  button: {
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#ecbfbf',
    borderRadius: 100,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  buttonText: {
    color: '#ecbfbf',
    fontSize: 12,
    fontWeight: 'bold'
  },

  boxImage: {
    marginTop: 20,
    alignSelf: 'center',
  },

  image: {
    width: 350,
    height: 545,
    borderWidth: 1,
    borderColor: '#433e3e',
    borderRadius: 10,
  },

  itensImage: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center'

  },

  textImage: {
    color: '#fff',
  },

  buttonsImage: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,

  },

  buttonImage1: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
  },

  textButton1: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  buttonImage2: {
    backgroundColor: 'rgba(102, 100, 100, 0.56)',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
  },

  textButton2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(102, 100, 100, 0.45)',
    alignItems: 'center',
  },

  boxFoter: {
    top: 5,
    flexDirection: 'row',
    gap: 90,
  },

  intensFooter: {
    alignItems: 'center'
  },

  iconsFooter: {
    tintColor: '#fff',
    width: 25,
    height: 25,
  },

  imagePerfil: {
    width: 25,
    height: 25,
    borderRadius: 2
  },

  textIcons: {
    color: '#fff',
    fontSize: 8,

  },

  textPerfil: {
    color: '#fff',
    fontSize: 8,
    top: 2

  },

})