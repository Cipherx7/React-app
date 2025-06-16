import { useState } from "react"

export default function LudoBoard(){

    let[moves, setmoves] = useState({blue : 0, red : 0, yellow :0, green :0});
    let[count, setcount] = useState(0);
    
    let updatered =() =>{
        setmoves(() =>{
            return{...moves, red :moves.red += 1}
        });
    };

    let updategreen =() =>{
        setmoves(() =>{
            return{...moves, green :moves.green += 1}
        });
    }

    let updateyellow =() =>{
        setmoves(() =>{
            return {...moves, yellow: moves.yellow += 1}
        });
    }

    let updateblue =() =>{
        setmoves(() =>{
            return{...moves, blue:moves.blue +=1}
        });
    }


    let style1={
        backgroundColor : "red"
    }
    let style2={
        backgroundColor : "green"
    }
    let style3={
        backgroundColor : "yellow",
        color : "black"
    }
    let style4={
        backgroundColor : "blue"
    }

    
    return(
        <div>
            <h2>game started</h2>
            <div className="board">

                <p>Red Moves = {moves.red} </p>
                <button onClick={updatered} style={style1}>Red +1</button>
                <br/>
                <br/>

                <p>Green Moves  = {moves.green}</p>
                <button onClick={updategreen} style={style2} >Green +1</button>
                <br/>
                <br/>

                <p>yellow Moves  = {moves.yellow}</p>
                <button onClick={updateyellow} style={style3 }>Yellow +1</button>
                <br/>
                <br/>

                <p>Blue Moves  = {moves.blue}</p>
                <button onClick={updateblue} style={style4}>Blue +1</button>
            </div>
        </div>
    )
}