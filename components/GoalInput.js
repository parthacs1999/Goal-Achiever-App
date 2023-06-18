import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";


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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    placeholder='Your course goal'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonConatiner}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8
    },
    buttonConatiner: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})