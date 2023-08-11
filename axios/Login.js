import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Button } from 'react-native';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [unitprice, setUnitprice] = useState('');
  const [unitsinstock, setUnitsinstock] = useState('');
  const [inputColor, setInputColor] = useState('black'); // State for input color

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeUnitprice = (text) => {
    const inputValue = parseFloat(text);
    const newInputColor = inputValue > 50 ? 'red' : 'black';

    setUnitprice(text);
    setInputColor(newInputColor); // Update input color
  };

  const onChangeUnitsinstock = (text) => {
    setUnitsinstock(text);
  };

  const handleAddButton = async () => {
    try {
      const response = await axios.post('https://northwind.vercel.app/api/products', {
        name,
        unitprice,
        unitsinstock,
      });

      console.log('Data sent successfully:', response.data);

      setName('');
      setUnitprice('');
      setUnitsinstock('');
      setInputColor('black'); // Reset the input color after submission
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={[styles.input]} 
        onChangeText={onChangeName}
        value={name}
        placeholder="Name: "
      />
      <TextInput
        style={[styles.input, { borderColor: inputColor }]} // Apply color to border
        onChangeText={onChangeUnitprice}
        value={unitprice}
        placeholder="Unit Price: "
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUnitsinstock}
        value={unitsinstock}
        placeholder="Units in Stock: "
        keyboardType="numeric"
      />
      <Button title="Add" onPress={handleAddButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
