function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form is Submitted")
}
function Form(){
    return(
        <form>
            <input placeholder="write something"/>
            <button onClick={handleFormSubmit} >Submit</button>
        </form>
    )
}



export default Form;