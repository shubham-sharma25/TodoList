import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    let todos = useSelector(state=>state)
  return (
    <div className="my-5">
        {todos.map(todo=>{
          return <TodoItem key={todo.id} todo={todo}/>
      })}
    </div>
  );
}

export default TodoList;