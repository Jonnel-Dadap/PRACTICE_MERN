import React from "react";
import { useState } from "react";
import List from "./List";

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleOnTodo = function (e) {
        setTodo(e.target.value);
    }

    const HandleOnAdd = function () {

        const temp = todos
        if (todo.trim() === "") {
            return;
        }
        else {
            setTodos((prevTodos) => [...prevTodos, todo]);
            setTodo("");
        }
    }
    return (
        <>
            <div>
                <h3>==Todo List ===</h3>
            </div>
            <div>
                <h3>List Of Todo: {todos.map((todo,index) => (
                    <List
                       key={index}
                       todo={todo} />
                ))
                }</h3>
                <div>

                </div>        
                <input type="text" placeholder="Input" value={todo} onChange={handleOnTodo} />
                <button onClick={HandleOnAdd}> Add </button>
            </div>
        </>
    );


}

export default Todo;