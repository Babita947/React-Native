import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, FlatList, Image } from 'react-native';

const ToDoList = props => {

    return (
        <FlatList keyExtractor={(item, index) => item.id} data={props.selectedCategory ? props.selectedCategory.subList : []} renderItem={todo => (
            <TouchableWithoutFeedback>
                <View flexDirection='row'>
                    <View style={[{ flexDirection: 'row' }, styles.items, (todo.item.id % 2 === 0) ? { backgroundColor: 'rgba(66, 160, 184, 0.8)' } : { backgroundColor: 'rgba(10, 10, 120, 0.6)' }]}>
                        <Text style={[(todo.item.id % 2 === 0) ? styles.fontColorBlue : styles.fontColorWhite, todo.item.isDone ? styles.done : '']}>{todo.item.id + 1 + '.'}</Text>
                        <Text style={[(todo.item.id % 2 === 0) ? styles.fontColorBlue : styles.fontColorWhite, todo.item.isDone ? styles.done : '', { marginRight: 60, width: 210, fontWeight: "bold" }]}>{todo.item.value}</Text>
                    </View>
                    <View flexDirection='row' style={{ marginTop: 10, marginLeft: 2 }}>
                        <TouchableOpacity style={{ height: 35, marginTop: 5, marginRight: 7, }} onPress={() => props.doneItem(todo.item.id)}>
                            <Image style={[styles.addIcon, { height: 30, width: 30, paddingRight: 10 }]} source={require('../../assets/done.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 35, marginTop: 5 }} onPress={() => props.deleteTodo(todo.item.id)}>
                            <Image style={[styles.addIcon, { height: 30, width: 30, paddingRight: 10 }]} source={require('../../assets/cross.png')} />
                        </TouchableOpacity>
                    </View>
                </View></TouchableWithoutFeedback>
        )} />
    );
};

const styles = StyleSheet.create({
    items: {
        marginLeft: '4%',
        height: 40,
        width: 308,
        marginTop: 10,
        borderRadius: 50
    },
    fontColorBlue: {
        color: 'white',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginLeft: 15,
        fontSize: 20
    },
    fontColorWhite: {
        color: 'white',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginLeft: 15,
        fontSize: 20
    },
    done: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        color: 'black',
        textDecorationStyle: 'solid'
    },
});

export default ToDoList;