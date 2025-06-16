function printhello(event){
    console.log("Hii this just for Demoo");
    alert("work is done");
    console.log(event.type);
}

function Button(){
    return(
        <div>
        <button onDoubleClick={printhello}>click here</button>
        </div>
    )
}

export default Button;