import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.icon}>
                <Image style={styles.iconImg} source={require('../assets/app.png')} />
            </View>
            <View>
                <View style={styles.line}></View>
                <View style={styles.flexDr}>
                    <Text style={styles.task}>Tasks</Text>
                    <Text style={styles.list}>Lists</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 50,
        padding: 10,
        height: 150,
    },
    icon: {
        marginBottom: 100,
    },
    iconImg: {
        height: 60,
        width: 60
    },
    line: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2
    },
    flexDr: {
        marginLeft: '26%',
        flexDirection: 'row'
    },
    task: {
        marginTop: -25,
        backgroundColor: '#fff',
        width: 90,
        height: 50,
        textAlign: "right",
        fontSize: 30,
        fontWeight: "400",
        paddingRight: 10
    },
    list: {
        marginTop: -25,
        textAlign: "left",
        backgroundColor: '#fff',
        width: 90,
        height: 50,
        fontSize: 30,
        paddingLeft: 10,
        fontWeight: "normal",
        fontFamily: 'sans-serif-thin'
    }
});

export default Header;