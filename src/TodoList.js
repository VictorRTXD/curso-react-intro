function TodoList(props) {
    return(
        <ul>
            {/* esto genera comunicacion entre componentes con props */}
            {/* cuando un componente tiene en su interior componentes y se usan propiedades
            especiales como children, no es necesario agregar sus atributos en jsx  */}
            {props.children} 
        </ul>
    );
}

export { TodoList }