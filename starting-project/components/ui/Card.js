import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 12,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    // sombra para Android con elevation
    elevation: 4,
    // sombra para iOS con shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
