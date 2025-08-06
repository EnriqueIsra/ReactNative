import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Tu objetivo del curso' />
        <Button title='Añadir Objetivo' />
      </View>
      <Text>Lista de objetivos...</Text>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  }
});
