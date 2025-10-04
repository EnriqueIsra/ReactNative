import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 1000;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 1000, {
    userNumber,
  });
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
      console.log(
        "Game Over, your number is: " + currentGuess + " - " + userNumber
      );
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 1000;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      console.log(minBoundary, maxBoundary, currentGuess, userNumber);
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    //console.log(minBoundary, maxBoundary);
    console.log(minBoundary, maxBoundary, currentGuess, userNumber);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(previousGuessRounds => [newRndNumber, ...previousGuessRounds])
  }

  console.log(currentGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionsText style={styles.instructionsText}>
          Higer or Lower?
        </InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text> )}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionsText: {
    marginBottom: 12,
  },
});
