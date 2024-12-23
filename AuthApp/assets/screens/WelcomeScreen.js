import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    axios
    .get('https://reactnative-ffd2b-default-rtdb.firebaseio.com/message.json?auth=' + token)
    .then((response) => {
      setFetchedMessage(response.data);
    });
  }, [token]);
  
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Bienvenido!</Text>
      <Text>Te has autenticado exitosamente!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
