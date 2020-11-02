import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, TouchableWithoutFeedback, TouchableNativeFeedback, TextInput, FlatList, Image } from 'react-native';

const RenderCategories = props => {

    let numColumns = 2;

    return (
        <FlatList numColumns={numColumns} style={styles.FlexDr} keyExtractor={(item, index) => item.id} data={props.CurrentCategories} renderItem={category => (
            <TouchableNativeFeedback onPress={() => props.setSelectedCategory(category.item)}>
                <View style={[styles.category, (category.item.id % 4 === 1 || (category.item.id - 1) % 4 === 1) ? styles.backgroundColorBlue : styles.backgroundColorWhite]}>
                    <Text style={styles.label}>{category.item.value}</Text>
                    <Text style={styles.description}>{category.item.subList.length} Items to do</Text>
                </View></TouchableNativeFeedback>
        )} />
    );
};

const styles = StyleSheet.create({
    flexDr: {
        marginLeft: '26%',
        flexDirection: 'row'
    },
    category: {
        height: 190,
        width: 190,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 0,
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: '10%'
    },
    backgroundColorBlue: {
        backgroundColor: 'rgba(10, 10, 120, 0.6)',
    },
    backgroundColorWhite: {
        backgroundColor: 'rgba(66, 160, 184, 0.8)',
    },
    label: {
        fontSize: 30,
        color: 'white',
    },
    description: {
        fontSize: 15,
        color: 'rgb(237, 250, 250)'
    },
});

export default RenderCategories;