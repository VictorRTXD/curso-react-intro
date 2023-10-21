import './CreateTodoButton.css'

function CreateTodoButton() {
    return(
        <button className='CreateTodoButton' onClick={
            (event) => {
                console.log("le diste click"); //no se acepta aqui ; si la funcion no tiene {}
                console.log(event.target);
            }
        } >+</button>
        
    );
} 

export { CreateTodoButton };