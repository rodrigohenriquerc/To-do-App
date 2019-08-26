import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => {

  return (
    <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
      <View style={styles.line}>
        <Text style={[styles.lineText, todo.done ? styles.lineThrough : null]}>
          {todo.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 50,
    marginRight: 10
  },
  lineText: {
    fontSize: 20,
    flex: 7
  },
  lineThrough: {
    textDecorationLine: 'line-through'
  }
});

export default TodoListItem;