import { StyleSheet, Text } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',

  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#000000',
    borderBottomWidth: 0.3,
    borderColor: '#433e3e',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  logo: {
    top: 64,
    width: 100,
    height: 30
  },

  headerButton: {
    position: 'absolute',
    right: 20,
    top: 70,
  },

  text: {
    fontWeight: 'bold',
    color: '#fff'

  },

  input: {
    backgroundColor: '#313131',
    width: 300,
    height: 50,
    padding: 10,
    color: '#fff',
    fontSize: 17,
    marginTop: 15,
    textAlign: 'left',
    borderRadius: 3
  },

  button: {
    backgroundColor: '#E50914',
    width: 300,
    height: 36,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  ou: {
    margin: 20,
    color: '#FFF',
    fontSize: 16,

  },

  buttonOu: {
    backgroundColor: '#313131',
    width: 300,
    height: 36,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    margin: 30,
  },

  text2: {
    color: '#cccccc',
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    fontSize: 13

  }

})