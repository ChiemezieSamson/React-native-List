// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import PokemonList from "./Data.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {PokemonList?.map(pokemon => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.CardText}>Text{pokemon.type}</Text>
              <Text style={styles.CardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  }, 
  scrollview: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  CardText: {
    fontSize: 20
  }
});
