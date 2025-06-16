import { useState } from "react"
import { v4 as uuidv4} from 'uuid'

export default function TodoList(){

    const[todo, setTodo] =useState([{task : "Prem" , id : uuidv4()}]);
    const[newTodo, setnewTodo] = useState(" ");

    let addnewtask = () =>{
        setTodo((todo) =>{
            return[...todo, {task : newTodo , id : uuidv4()}]
        })
        setnewTodo(" ");
    }

    let updateTask = (event) =>{
        setnewTodo(event.target.value);
        console.log(event.target.value);
    }

    let delTodo =(id) =>{
        // console.log(id);
        setTodo(todo.filter((todo) => todo.id != id))
    };


    return(
        <div>
            <h2>Todo List Creation</h2>
            <input placeholder="Add a Task" value={newTodo}  onChange={updateTask}></input>
            <br/>
            <br/>
            <button onClick={addnewtask}>Add a Task</button>

            <hr/>

            <h2>Todo Task</h2>
            <ul>
                {
                    todo.map((todo) =>(
                        <li
                        key={todo.id}>
                        <span>{todo.task }</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={()=> delTodo(todo.id)}>Delete</button>
                        </li>

                    ))
                }
            </ul>

            
        </div>
    )
}