import { StyleSheet, ImageBackground } from 'react-native';
import {useState} from "react"
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

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
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground 
      source={require("./assets/images/background.png")}
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});
