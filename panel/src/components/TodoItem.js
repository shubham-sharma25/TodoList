import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    let dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    return (
        <div>
            <div className="row mx-3 align-items-center">
                {/* <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div> */}
                <div className="col px-0">
                    {editable ?
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        :
                        <h6 className="text-success border-bottom">{todo.name} (0)</h6>}
                </div>
                <button
                    onClick={() => {
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name:name
                            }
                        ))
                        if(editable){
                            setName(todo.name);
                        }
                        setEditable(!editable);
                    }}
                    className="border-0"
                >
                {editable?<p className="m-0">&#9998;</p>:<p className="m-0">&#9998;</p>} 
                </button>
                <button
                    className="border-0"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default TodoItem;