import { Text, View, StyleSheet } from "react-native";
function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Opponents Guess!</Text>
            {/* Guess */}
            <View>
                <Text>Higer or Lower?</Text>
                {/** + - */}
            </View>
            <View>{/** LOG ROUNDS */}</View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingLeft: 24,
        paddingTop: 60
    }
})