import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native' 
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: "123",
    title: "Get a ride",  
    image: "https://mobile-content.uber.com/launch-experience/nava-icons-may-2026/light-mode/Sedan-160-temp.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  }
];

const NavOptions = () => {
  const navegation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ alignItems: 'flex-start' }} 
      renderItem={({ item }) => ( 
       
        <TouchableOpacity style={styles.card} onPress={() => navegation.navigate(item.screen)}>
          <View style={{ alignItems: 'center' }}> 
            <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  card: {
   
    padding: 20, 
    margin: 10, 
    backgroundColor: '#f3f4f6', 
    borderRadius: 12,
    width: 150,           
    alignItems: 'center', 
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain'
  },
  title: {
    marginTop: 8,       // mt-2
    fontSize: 18,       // text-lg
    fontWeight: '600',  // font-semibold
    color: '#000000',
  },
});

export default NavOptions;