import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import Card from './Card'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/imgs/central_perk_logo.jpeg')}
      />
      <Text style={styles.text}>Probá nuestro café!</Text>
      <Card style={styles.card}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    width: '70%',
    height: '0%',
    resizeMode: 'contain',
  },
});
