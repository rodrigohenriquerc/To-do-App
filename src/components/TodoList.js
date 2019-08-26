import React from 'react';
import { View } from 'react-native';

// Redux.
import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from '../actions';

// Components.
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => (
  <View>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressTodo={() => dispatchToggleTodo(todo.id)}
        onLongPressTodo={() => dispatchSetEditingTodo(todo)}
      />
    ))}
  </View>
);

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
}

export default connect(
  mapStateToProps,
  {
    dispatchToggleTodo: toggleTodo,
    dispatchSetEditingTodo: setEditingTodo
  }
)(TodoList);