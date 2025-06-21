import { StyleSheet } from "react-native";

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

  text: {
    position: 'absolute',
    right: 20,
    top: 70,
    color: '#fff',
    fontWeight: 'bold',
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
    fontSize: 17,
    fontWeight: 'bold'
  },

})