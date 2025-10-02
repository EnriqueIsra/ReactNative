import { StyleSheet, ImageBackground, SafeAreaViewBase, View, StatusBar } from 'react-native';
import {useState} from "react"
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickerNumberHandler(pickerNumber){
    setUserNumber(pickerNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickerNumberHandler}/>
  if(userNumber){
    screen = <GameScreen/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require("./assets/images/background.png")}
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
        <View style={styles.rootScreen}>{screen}</View>
      
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight
  },
  backgroundImage: {
    opacity: 0.25
  }
});
