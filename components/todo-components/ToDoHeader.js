import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const TodoModal = props => {

    return (
        <View flexDirection='row'>
            <View style={{ marginLeft: '4%' }}>
                <Image style={styles.iconImg} source={require('../../assets/app.png')} />
            </View>
            <View style={{ marginLeft: 267 }}>
                <TouchableOpacity style={{
                    marginTop: 4,
                    marginLeft: '43%'
                }} activeOpacity={.5} onPress={() => props.closeModal()}>
                    <Text style={{ fontSize: 30 }}>X</Text>
                </TouchableOpacity>
            </View></View>
    );
};

const styles = StyleSheet.create({
    iconImg: {
        height: 60,
        width: 60
    },
});

export default TodoModal;