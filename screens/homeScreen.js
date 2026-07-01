import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
const homeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={{
          uri: 'https://www.edigitalagency.com.au/wp-content/uploads/new-Uber-logo-black-png-small-size.png' 
        }} 
      />
      <NavOptions />
    </View>
  )
}

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50, 
    backgroundColor: '#ffffff',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});