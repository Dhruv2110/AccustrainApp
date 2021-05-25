import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

//Screens
import Home from './Screens/Home'
import Products from './Screens/Products'
import Services from './Screens/Services'
import Contact from './Screens/Contact'

const App = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'HomeScreen', title: 'Home', icon: 'home', color: '#CA352B'  },
    { key: 'ProductScreen', title: 'Products', icon: 'weight-kilogram', color: '#CA352B'  },
    { key: 'ServicesScreen', title: 'Services', icon: 'database-settings', color: '#CA352B'  },
    { key: 'ContactScreen', title: 'Contact', icon: 'email', color: '#CA352B'  }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    HomeScreen: Home,
    ProductScreen: Products,
    ServicesScreen: Services,
    ContactScreen: Contact
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
