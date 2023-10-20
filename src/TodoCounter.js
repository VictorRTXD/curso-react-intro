import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">welcome back victor, has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
    );
}

export { TodoCounter };

//las props en realidad son objetos!
//si se mandan props a componentes, no aparecera como atributos html!, diferente a que si colocamos un placeholder a un input en react que si se hara
//se pueden usar de la forma de props como parametro o de la forma destructurada (usando {})

/* forma 1
function TodoCounter(props) {
  props.total

  return (
    <h1>has completado 3 de 5 TODOS</h1>
  );
}
*/

/* forma 2
function TodoCounter({ total, children }) {
    return (
      <h1>has completado {completed} de {total} TODOS</h1>
    );
}
*/

/* forma de importar css con llaves en jsx
function TodoCounter({ total, completed }) {
    return (
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
      }}>has completado {completed} de {total} TODOS</h1>
    );
}
*/