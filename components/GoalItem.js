import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{ color: '#210644' }} style={({ pressed }) => pressed && styles.pressItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})