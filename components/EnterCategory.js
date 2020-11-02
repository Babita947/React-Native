import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const EnterCategory = props => {

    const [enteredCategory, setEnteredCategory] = useState('');

    const handleInput = enteredText => {
        setEnteredCategory(enteredText);
    };

    const addCategory = () => {
        props.updateCategories(enteredCategory);
        setEnteredCategory('');
    };

    const cancelButton = () => {
        setEnteredCategory('');
    }

    const renderIf = (condition, content) => {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

    return (
        <View>
            {renderIf(props.hideField, <View style={styles.form}>
                <TextInput style={styles.inputField} placeholder="Enter Category..."
                    onChangeText={handleInput} value={enteredCategory} />
                <View style={styles.buttons}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Button disabled={enteredCategory === ''} title="Add" onPress={addCategory} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button title="Cancel" color="red" disabled={enteredCategory === ''} onPress={cancelButton} />
                    </View>
                </View>
            </View>)}
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

export default EnterCategory;