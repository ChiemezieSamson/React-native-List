// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, FlatList, SectionList } from 'react-native';
import PokemonList from "./Data.json"
import groupedPokemonList from "./grouped-data.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* List */}
      {/* <ScrollView style={styles.scrollview}>
        {PokemonList?.map(pokemon => {
          console.log(pokemon.id);
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.CardText}>Text{pokemon.type}</Text>
              <Text style={styles.CardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}

      <View style={styles.scrollview}>
      {/* FlatList */}
        {/* <FlatList data={PokemonList} renderItem={({item}) =>  {
          return (
            <View key={item.id} style={styles.card}>
              <Text style={styles.CardText}>{item.type}</Text>
              <Text style={styles.CardText}>{item.name}</Text>
            </View>
          )
          }}
          // horizontal={true}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height: 16}}/>}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        /> */}

        {/* sectionList */}
        <SectionList sections={groupedPokemonList} renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text style={styles.CardText}>{item}</Text>
            </View>
          )
          }}

          renderSectionHeader={({section}) => (<Text style={styles.sectionHeaderText}>{section.type}</Text>)}
          ItemSeparatorComponent={() => (<View style={{height: 16}}/>)}
          SectionSeparatorComponent={() => (<View style={{height: 16}}/>)}
        />

      </View>
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
    // marginBottom: 16
  },
  CardText: {
    fontSize: 20
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12
  }, 
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
});
