// Laczkó Bálint II/2/N 2024.04.03
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const host = "http://localhost:8000/"
  const endpoint = "repulok"
  const url = host + endpoint

  const [repulok, setJarmuvek] = useState([]);

  function getRepcsi() {
    fetch(url)
    .then(response => response.json())
    .then(result => {      
      console.log(result)
      setJarmuvek(result)
    })
  }

  return (
    <View style={styles.container}>     
    <View style={styles.header}>        
        <Text style={styles.headerText}>Repülő Lista</Text>
    </View>


      <Pressable onPress={getRepcsi}>
        <Text>Lekér</Text>
      </Pressable>

      <FlatList 
  data={repulok}
  renderItem={({item}) => (
    <View style={styles.listItem}>
      <Text>Gyártó neve: {item.gyarto_neve}</Text>
      <Text>Repülőgép típusa: {item.tipus}</Text>
      <Text>Gyártás éve: {item.gyartas_ev}</Text>
      <Text>Maximális sebesség: {item.max_sebesseg}</Text>
      <Text>Hatótáv: {item.hatotav}</Text>
      <Text>------------------------------------</Text>
    </View>
  )}
/>
<View style={styles.footer}>
        <Text style={styles.footerText}>Laczkó Bálint, 2024</Text>
      </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    borderWidth: 1,
    borderColor: 'blue', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
      color: 'white',
      fontSize: 14,
      textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    fontSize: 18,
    paddingHorizontal: 8,
  },
  header: {
    backgroundColor: 'grey',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  headerText: {
    fontSize: 28,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  label: {
    marginTop: 10,
    fontSize: 22,
  },
  footer: {
    backgroundColor: 'grey',
    width: '100%',
    padding: 5,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
});
