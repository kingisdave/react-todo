import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {

  return (
    <Provider store={store} >
      <div className="App">
        <AddTodo />
        <hr/>
        <Todos />
    </div>
    </Provider>
  );
}

export default App;
