import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItems } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoContainer } from "./TodoContainer.js";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'Aprender a programar mejor', completed: false},
  { text: 'Mejorar la logica', completed: false},
  { text: 'Mejorar la sensualidad', completed: false},
  { text: 'Mejorar el gaming', completed: false}
];

function App() {
  return (
    // puede tener un componente que envuelva todo la logica o usar React.Fragment
    //si se usa React.Fragment, no aparecera el div que envuelve el jsx
    <> 
      <TodoContainer>
        <TodoCounter completed={15} total={25} />

        <TodoSearch className={"search"}/>
        
        <TodoList className={"todoList"}>
          {/* <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems /> */}

          {/* los "{}" sirven para meter expresiones JS dentro de JSX */}
          {defaultTodos.map(todo => (
            <TodoItems key={todo.text} text={todo.text} completed={todo.completed} /> //es necesario generar una key unica para renderizar, text en este caso no se repite
          ))}   
        </TodoList>
      
        <CreateTodoButton />
      </TodoContainer>
    </>
  );
}



export default App;