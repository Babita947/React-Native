import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';


const AddToDo = props => {

    const [enteredToDo, setEnteredToDo] = useState('');

    const handleEnteredInput = enteredText => {
        setEnteredToDo(enteredText);
    };

    const addTodo = (item) => {
        let data = {};
        data.value = item;
        data.id = props.selectedCategory.subList.length;
        data.isDone = false;
        props.updateTodoList(data);
        setEnteredToDo('');
    }

    const cancelEnteredTodo = () => {
        setEnteredToDo('');
    }

    return (
        <View style={styles.form}>
            <TextInput style={styles.inputField} placeholder="Enter To Do..."
                onChangeText={handleEnteredInput} value={enteredToDo} />
            <View style={styles.buttons}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Button disabled={enteredToDo === ''} title="Add" onPress={() => addTodo(enteredToDo)} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Cancel" color="red" disabled={enteredToDo === ''} onPress={cancelEnteredTodo} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    inputField: {
        height: 50,
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'left',
        borderColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        marginLeft: '50%'
    },
});

export default AddToDo;