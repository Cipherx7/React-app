import { useState } from "react"

export default function Counter(){
    const[count, setcount] = useState(0.09);
    console.log("Componenet is rendered");
    console.log(`count = ${count}`);

    let incCount =() =>{
        setcount ((preval) =>{
            return preval+1;

        });

        setcount ((preval) =>{
            return preval+4;

        });

        if(count == 20){
            alert("you have reached upto 20 Please stop!!");
        }

        console.log(`Value is changing inside ${count}`);
    }
    return(
        <div>
            <h2> It is a Counter</h2>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase Counter</button>
        </div>
    )
}