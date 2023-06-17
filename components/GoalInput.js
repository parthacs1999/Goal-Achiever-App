import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Your course goal'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
})