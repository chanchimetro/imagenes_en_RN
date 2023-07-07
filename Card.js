import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.cardImage}
        source={require('./assets/imgs/coffee1.jpeg')}
      />
        <Text style={styles.text}>Mocha</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '65%',
    flex: 1,
    backgroundColor: '#267530',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 30,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  footer:{
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  cardImage: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});