import { View, Text } from 'react-native';
import React from 'react';
import Login from './axios/Login';
import Product from './axios/Product';

const App = () => {
  return (
    <View>
      <Login />
      <Product/>
    </View>
  );
};

export default App;
