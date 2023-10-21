import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// puede tener un componente que envuelva todo la logica o usar React.Fragment
//si se usa React.Fragment, no aparecera el div que envuelve el jsx
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'ya usamos estados derivados en react', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  //necesita un estado inicial que es vacio y actualizarla
  const [searchValue, setsearchValue] = React.useState(''); 
  console.log('los usuarios buscan todos de ' + searchValue);

  // este metodo nos devuelve un array con las coincidencias 
  const completedTodos = todos.filter(
    //los !! devuelven un boleano, es irrelevante pero ayuda a identificar lo que recibimos
    todo => !!todo.completed 
  ).length; 
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter 
        completed={completedTodos} total={totalTodos} 
      />
      <TodoSearch 
        searchValue = {searchValue} //recuerda que son props
        setsearchValue = {setsearchValue}
      />

      {/* <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems /> */}
      {/* los "{}" sirven para meter expresiones JS dentro de JSX */}
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;