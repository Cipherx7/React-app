import { useState } from "react"

export default function LikeButton(){

    const[isLike, setIsLike] = useState(false);
    const[click, setClick] = useState(0);

    let toggltbtn = () =>{
        setIsLike(!isLike);
        setClick(click+1)
    }

    let color ={
        color : "red"
    }



    return(
        <div>
        <h2 style={color}>click = {click}</h2>
            <h2>Like Button creation</h2>
            <h1 onClick={toggltbtn}>
                {isLike ?
                (
                    <i className="fa-solid fa-heart" style={color}></i>
                ):
                (
                    <i className="fa-solid fa-heart" ></i>
                )
                    
                }
            </h1>
        </div>
    )
}