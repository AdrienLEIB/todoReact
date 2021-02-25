import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
const Todo = (props) =>{

       
    const [todoList, setTodo] = useState([])
    const [name, setName] = useState('');

    const addTodo = (event) =>{
        event.preventDefault();
        if (!name) {
            alert('Le nom ne doit pas être vide')
          } else {
            const newTodo = {"name": name, "id": uuidv4()}
            setTodo([...todoList, newTodo]);
            setName('');
          }

    }

    const deleteTodo = (event) =>{
        console.log(event.target.name)
        const newTodo = todoList.filter(todo => todo.id != event.target.name);
        setTodo(newTodo);
    }


    
    return(
        <div>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id}> {item.name} <button name={item.id} onClick={deleteTodo}>X</button></li>

                ))}
            </ul>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button type="button" onClick={addTodo}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default Todo