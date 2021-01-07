import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <h5 className="category px-3 py-1">CATEGORY</h5>
      <TodoList/>
      <TodoInput/>
    </div>
  );
}

export default App;