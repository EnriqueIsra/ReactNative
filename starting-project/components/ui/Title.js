import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Title({children, style}){
    return <Text style={[styles.title, style]}>{children}</Text>
}
export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        borderWidth: 2,
        borderColor: "white",
        color: "white",
        padding: 12,
        textAlign: "center"
    }
})