import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

export default function Todo(){
    let style ={
        backgroundColor:"red"
    }

    const[todo,setTodo] = useState([{ task : "Prasad", id : uuidv4() }]);
    const[newTodo, setNewTodo] = useState("");

    let addtask = () =>{
        setTodo((Todo) =>{
            return [...Todo, {task : newTodo, id: uuidv4()}]
        })
        setNewTodo("")
    }

    let updateValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let delTodo = (id) =>{
        setTodo( (prevTodo) =>todo.filter((prevTodo) => prevTodo.id !=  id));

        // alert("task is  deleted and id is "+ id);

    }

    return(
        <div>
        <h1>Todo List creation App</h1>
        <input placeholder="Add a Task" value={newTodo} onChange={updateValue}></input>
        <br/>
        <br/>
        <button  style={style} onClick={addtask}>Add a Task</button>
        <hr/>
        <hr/>
        <h2>Task List</h2>
        <ul>
        {
            todo.map((todo) =>(
                <li key={todo.id}>
                <button style={style} onClick={ () => delTodo(todo.id)}>Delete task</button>
                &nbsp; &nbsp;
                    <span>{todo.task}</span>
                    <hr/>
                </li>
            ) )
        }
        </ul>

        </div>
    )
}
