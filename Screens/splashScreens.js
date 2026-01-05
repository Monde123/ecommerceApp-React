import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';
import { loadUser } from './auth/authfunction';

const SplashScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      loadUser().then((user) => {
        if (!user) {
          navigation.replace('Login');
        } else {
          const { name: userName } = user;
          setName(userName);
          console.log('Utilisateur :', userName);
          setTimeout(() => {
            navigation.replace('Menu');
          }, 1000);
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name.trim() ? `Hello ${name} 😉` : 'Welcome 🖖'}
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
