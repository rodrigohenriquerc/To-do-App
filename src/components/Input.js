import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ value, onChangeText }) => (
    <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        underlineColorAndroid='#000'
    />
)

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingBottom: 15
    }
});

export default Input;