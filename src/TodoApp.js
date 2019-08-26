import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ name: 'To-do App' })
  .useReactNative()

// Redux.
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';

// Components.
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const store = createStore(rootReducer, devToolsEnhancer());

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});