import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

// Redux.
import { connect } from 'react-redux';
import { addTodo, updateTodo, setTodoText } from '../actions';

// Components.
import Input from './Input';

class TodoForm extends Component {

  onChangeText = text => {
    this.props.dispatchSetTodoText(text);
  }

  onPress = () => {
    const { todo } = this.props;
    if (todo.id) {
      return this.props.dispatchUpdateTodo(todo);
    }
    const { text } = todo;
    this.props.dispatchAddTodo(text);
  }

  render() {
    const { text, id } = this.props.todo;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            value={text}
            onChangeText={text => this.onChangeText(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={id ? 'SAVE' : 'ADD'}
            onPress={() => this.onPress()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    todo: state.editingTodo
  }
}

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchUpdateTodo: updateTodo,
    dispatchSetTodoText: setTodoText
  }
)(TodoForm);

// MESMA COISA
//     || 
//     ||
//    \  /
//     \/

// const mapDispatchToProps = {
//     dispatchAddTodo: addTodo
// }
// export default connect(null, mapDispatchToProps)(TodoForm);

// MESMA COISA
//     || 
//     ||
//    \  /
//     \/

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }
// export default connect(null, mapDispatchToProps)(TodoForm);