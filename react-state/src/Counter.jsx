import { useState } from "react";
function Counter(){

    const[count, setcount] = useState(0);
    // console.log("Componenet is rendering");
    // console.log(`count = ${count}`)

    let incCount=() =>{
        setcount(count =>count+1);
        setcount(count =>count+1);
        
        console.log(`Inside incCount ,count=${count} `)
    }
    return(
        <div>
            <h2>count ={count}</h2>
            <button onClick={incCount}>Increase the count</button>
        </div>
    )
}


export default Counter;