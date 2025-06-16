function dosomething(event){
    console.log("You have clicked");
    console.log(event);
}

function dobClick(){
    console.log("You have double cliked");
}

export default function Button() {
    return(
        <div>
            <button onMouseDown={dosomething}>click me</button>
            <p onDoubleClick={dobClick}>You have to do something because you reach here from lots of problem</p>
        </div>
    );
}

