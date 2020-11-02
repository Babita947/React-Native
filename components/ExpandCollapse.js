import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const ExpandCollapse = props => {

    const renderButton = (hideField) => {
        if (hideField) {
            return (<TouchableOpacity style={styles.addContainer} activeOpacity={.5} onPress={() => props.hideFieldHandler(false)}>

                <Image style={styles.addIcon} source={require('../assets/minus.png')} />

            </TouchableOpacity>);
        } else {
            return (<TouchableOpacity style={styles.addContainer} activeOpacity={.5} onPress={() => props.hideFieldHandler(true)}>

                <Image style={styles.addIcon} source={require('../assets/plus.png')} />

            </TouchableOpacity>);
        }
    }

    return (
        <View>{renderButton(props.hideField)}</View>

    );
};

const styles = StyleSheet.create({
    addContainer: {
        marginTop: 35,
        marginLeft: '40%'
    },
    addIcon: {
        height: 60,
        width: 60,
    },
});

export default ExpandCollapse;